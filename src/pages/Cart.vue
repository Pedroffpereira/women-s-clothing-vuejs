<script setup>
import Title from '../components/cart/Title.vue'
import CartList from '../components/cart/CartList.vue'
import Coupon from '../components/cart/coupon/Form.vue'
import Payment from '../components/cart/payment/Payment.vue'
import NoCart from '../components/cart/empty/NoCart.vue'
import { useCartStore } from '../store/cart'
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