<script setup>
defineProps({
    max: {
        type: Number,
        required: true
    }
})
</script>
<template>
    <span class="text-danger fs-6">Only {{ max }} in stock</span>
</template>