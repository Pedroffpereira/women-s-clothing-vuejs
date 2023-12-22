<script setup>
import Title from './Title.vue'
import CartList from './CartList.vue'
import Coupon from './coupon/Form.vue'
import Payment from './payment/Payment.vue'
import NoCart from './empty/NoCart.vue'
import { useCartStore } from '../../store/cart'
const cartStore = useCartStore();
</script>

<template>
    <div class="row row-gap-5 justify-content-between" v-if="cartStore.items.length > 0">
        <Title></Title>
        <div class="col-lg-7 col-xl-8">
            <CartList></CartList>
        </div>
        <div class="col-lg-auto d-flex flex-column row-gap-5">
            <Coupon></Coupon>
            <Payment></Payment>
        </div>
    </div>
    <div v-else>
        <NoCart></NoCart>
    </div>
</template>