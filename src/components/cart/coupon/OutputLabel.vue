<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    isCouponValid: {
        type: Boolean,
        required: true
    }
})
</script>

<template>
    <label for="coupon" :class="{'text-success': isCouponValid, 'text-danger': !isCouponValid}">{{ text }}</label>
</template>