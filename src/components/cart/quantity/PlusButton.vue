<script setup>
import { useCartStore } from '../../../store/cart';
const cartStore = useCartStore();
defineProps({
    itemId : {
        type: Number,
        required: true
    },
})
</script>

<template>
    <button @click="cartStore.incrementQuantity(itemId)" id="increment-quantity">+</button>
</template>

<style scoped>
#increment-quantity {
    width: 42px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 2px solid lightgray;
    border-left: none;
    background-color: white;
    padding: 1px 12px 4px 12px;
    font-size: 1.4rem;
}
</style>
