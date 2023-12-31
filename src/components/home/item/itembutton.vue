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
    <button class="mx-auto" @click="this.$emit('addToCart', product, quantity)">
        <i class="fa-solid fa-cart-shopping"></i>
        Adicionar
    </button>
</template>

<style scoped>
button {
    background-color: #ff7352;
    border: 0px;
    padding: 10px;
}

button:hover {
    transition: all 0.5s;
    background-color: #ff623d;
}
</style>