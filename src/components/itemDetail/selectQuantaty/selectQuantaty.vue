<script>
import Input from './Input.vue';
import Button from './Button.vue';
export default {
    methods: {
        inputQuantaty: function (quantity) {
            if (quantity < 0) {
                quantity = 0;
            }

            if (quantity > this.maxQuantity) {
                quantity = this.maxQuantity;
            }
            this.quantity = quantity
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
            if (quantity < 0) {
                this.quantity = 0;
                return
            }

            this.quantity = quantity
        }">
            -
        </Button>
        <Input :quantity="quantity" @inputQuantaty="inputQuantaty" />
        <Button :quantity="quantity" @clickSetQuantity="() => {
            const quantity = this.quantity + 1;
            if (quantity > this.maxQuantity) {
                this.quantity = this.maxQuantity;
                return
            }
            this.quantity = quantity
        }
            ">+</Button>
    </div>
</template>