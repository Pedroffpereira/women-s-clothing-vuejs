<script setup>
import { useCartStore } from '../../../store/cart';
const cartStore = useCartStore();
</script>

<template>
    <div class="d-flex justify-content-between">
        <span>Total:</span>
        <span class="fw-bold fs-5">${{ cartStore.total.toFixed(2) }}</span>
    </div>
</template>