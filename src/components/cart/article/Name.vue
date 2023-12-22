<script setup>
defineProps({
    name: {
    type: String,
    required: true
  }
})
</script>
<template>
    <p class="m-0">{{ name }}</p>
</template>