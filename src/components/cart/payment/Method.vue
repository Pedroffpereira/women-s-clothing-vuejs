<script setup>
defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    }
})
</script>

<template>
    <img :src="src" :alt="alt">
</template>

<style scoped>
img {
    width: 32px;
}
</style>