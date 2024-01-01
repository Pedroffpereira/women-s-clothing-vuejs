<script>
export default {
    data() {
        return {
            selectQuantity: this.quantity,
        }
    },
    props: {
        quantity: 0,
    },
    watch: {
        quantity: function (val) {
            this.selectQuantity = val
        },
        selectQuantity: function () {
            this.$emit('inputQuantaty', this.selectQuantity);
        }
    },
}
</script>
<template>
    <input type="text" v-model="selectQuantity" class="h-100">
</template>
<style scoped>
input {
    border: none;
    text-align: center;
    width: 50px;
    outline: none;
}
</style>