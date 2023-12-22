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
    <button @click="cartStore.decrementQuantity(itemId)" id="decrement-quantity">-</button>
</template>

<style scoped>
#decrement-quantity {
    width: 42px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 2px solid lightgray;
    border-right: none;
    background-color: white;
    padding: 1px 12px 4px 12px;
    font-size: 1.4rem;
}
</style>