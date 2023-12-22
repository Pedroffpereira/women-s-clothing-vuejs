<script setup>
import { ref } from 'vue'
</script>

<template>
    <input type="text"
        class="outline-primary"
        id="coupon" 
        placeholder="Coupon code"
        @input="$emit('couponInput', $event.target.value)">
</template>

<style scoped>
input {
    padding-inline: 10px;
    border: 2px solid lightgray;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    border-right: none;
    outline: none;
}
</style>