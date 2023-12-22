<script setup>
import CartItem from './CartItem.vue'
import { useCartStore } from '../../store/cart';
const cartStore = useCartStore();

</script>

<template>
    <ul class="d-grid row-gap-5 list-unstyled p-0">
        <li v-for="(item, index) in cartStore.items">
            <CartItem :key="index" :item="item"></CartItem>
            <div class="separator"></div>
        </li>
    </ul>
</template>
<style scoped>
.separator {
    margin-top: 2rem;
    border-top: 1px solid lightgray;
}
</style>
