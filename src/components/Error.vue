<script setup>
defineProps({
    message: {
        type: String,
        required: true
    },
})
</script>

<template>
    <div class="text-center">
        <i class="fa-solid fa-heart-crack fa-2xl text-danger"></i>
        <h1 class="sorry">We're sorry!</h1>
        <p>{{ message }}</p>
    </div>
</template>

<style scoped>
.sorry {
    color: purple;
}
</style>