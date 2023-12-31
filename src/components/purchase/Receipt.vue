<script setup>
import { useCartStore } from '../../store/cart';
import Article from '../cart/article/article.vue';
import Separator from '../Separator.vue';
import Quantity from './Quantity.vue';
import Total from './Total.vue'
import {computed } from 'vue';

const getDiscountedTotal = computed(() => {
    return cartStore.purchase.checkout.discounted_total === 0 ?
        cartStore.purchase.checkout.total :
        cartStore.purchase.checkout.discounted_total
})

const cartStore = useCartStore();
</script>

<template>
    <ul class="d-grid row-gap-5 list-unstyled pt-4 mb-5">
        <li v-for="(item, index) in cartStore.purchase.checkout.products">
            <div class="row align-items-center" :key="index">
                <Article class="col" :item="item"></Article>
                <div class="col-auto text-center d-grid justify-content-end">
                    <Quantity :quantity="item.quantity"></Quantity>
                </div>
                <Separator></Separator>
            </div>
        </li>
    </ul>
    <Total 
    :total="cartStore.purchase.checkout.total" 
    :discounted-total="getDiscountedTotal">
    </Total>
</template>

