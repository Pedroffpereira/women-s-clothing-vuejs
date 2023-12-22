<script setup>
import { useCartStore } from '../../../store/cart';
const cartStore = useCartStore();
</script>

<template>
    <div class="d-flex justify-content-between">
        <span>Total Price:</span>
        <span class="fs-5">${{ cartStore.totalPrice.toFixed(2) }}</span>
    </div>
</template>