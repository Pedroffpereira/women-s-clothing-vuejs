<script>
import { ProductDTO } from "../../../dto/Product.js"
export default {
    props: {
        product: Object,
        quantity: Number
    },
}
</script>
<template>
    <button class="mx-5" @click="() => { this.$emit('addToCart', product, quantity); this.$emit('customClick') }">
        <i class="fa-solid fa-cart-shopping"></i>
        Adicionar
    </button>
</template>

<style scoped>
button {
    background-color: #5297ff;
    border: 0px;
    padding: 10px;
}

button:hover {
    transition: all 0.5s;
    background-color: #526cff;
}
</style>