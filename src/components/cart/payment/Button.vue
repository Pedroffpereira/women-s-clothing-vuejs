<script setup>
import { useCartStore } from '../../../store/cart';
const cartStore = useCartStore();
</script>

<template>
    <button class="btn btn-primary fw-semibold" @click="cartStore.makePurchase">Make Purchase</button>
</template>

<style scoped>
button {
    padding-block: 11px;
}
</style>