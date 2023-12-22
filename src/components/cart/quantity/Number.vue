<script setup>
defineProps({
    cartQuantity: {
    type: Number,
    required: true
  }
})
</script>
<template>
    <span>{{ cartQuantity }}</span>
</template>

<style scoped>
span {
    min-width: 50px;
    display: grid;
    place-items: center;
    border: 2px solid lightgray;
    padding: 1px 12px 1px 12px;
    font-size: 1.2rem;
}
</style>
