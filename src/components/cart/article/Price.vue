<script setup>
defineProps({
    price: {
    type: Number,
    required: true
  }
})
</script>
<template>
    <p class="fw-bold fs-5 m-0">${{ price }}</p>
</template>