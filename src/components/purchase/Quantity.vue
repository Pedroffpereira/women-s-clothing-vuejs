<script setup>
defineProps({
    quantity: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="fs-5 text-info">Qty</div>
    <div class="fs-4">{{quantity}}</div>
</template>