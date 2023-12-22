<script setup>
import { useCartStore } from '../../../store/cart';
import { useCouponStore } from '../../../store/coupon';
const cartStore = useCartStore();
const couponStore = useCouponStore();
</script>

<template>
    <div class="d-flex justify-content-between">
        <span>Discount:</span>
        <span class="text-danger fs-5" v-if="couponStore.hasDiscount">- ${{ cartStore.discountPrice.toFixed(2) }}</span>
    </div>
</template>