<script setup>
defineProps({
    total: {
        type: Number,
        required: true
    },
    discountedTotal: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="d-flex justify-content-between mb-2 fw-bold fs-5">
        <div>Total</div>
        <div>${{ total.toFixed(2) }}</div>
    </div>
    <div class="d-flex justify-content-between align-items-center column-gap-3 fw-bold fs-5">
        <div>Discounted total</div>
        <div>${{ discountedTotal.toFixed(2) }}</div>
    </div>
</template>