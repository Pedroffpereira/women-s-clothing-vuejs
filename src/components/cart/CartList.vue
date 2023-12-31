<script setup>
import CartItem from './CartItem.vue'
import Separator from '../Separator.vue'
import { useCartStore } from '../../store/cart';
const cartStore = useCartStore();

</script>

<template>
    <ul class="d-grid row-gap-5 list-unstyled p-0">
        <li v-for="(item, index) in cartStore.items">
            <CartItem :key="index" :item="item"></CartItem>
            <Separator></Separator>
        </li>
    </ul>
</template>

