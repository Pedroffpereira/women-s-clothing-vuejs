<script>
import Input from './Input.vue';
import Button from './Button.vue';
export default {
    methods: {
        inputQuantaty: function (quantity) {
            if (isNaN(quantity)) {
                this.quantity = 1;
                return;
            }
            if (quantity < 1) {
                this.quantity = 1;
                return;
            }

            if (quantity > this.maxQuantity) {
                this.quantity = this.maxQuantity;
                return;
            }
            this.quantity = quantity;
            return;
        }
    },
    props: {
        maxQuantity: Number
    },
    data() {
        return {
            quantity: 0
        }
    },
    components: {
        Input,
        Button
    },
    watch: {
        quantity: function () {
            this.$emit("setQuantaty", this.quantity)
        }
    }
}
</script>
<template>
    <div>
        <Button :quantity="quantity" @clickSetQuantity="() => {
            const quantity = this.quantity - 1
            if (quantity < 1) {
                this.quantity = 1;
                return
            }

            this.quantity = quantity
        }">
            -
        </Button>
        <Input :quantity="quantity" @inputQuantaty="inputQuantaty" />
        <Button :quantity="quantity" @clickSetQuantity="() => {
            const quantity = this.quantity + 1;
            if (quantity >= this.maxQuantity) {
                this.quantity = this.maxQuantity;
                return
            }
            this.quantity = quantity
        }
            ">+</Button>
    </div>
</template>
<style scoped>
div {
    border: 1px solid black;
}
</style>