<script setup>
import ReturnToShop from '../GiveMeYourMoney.vue'
</script>

<template>
    <div class="text-center">
        <h1 class="mb-4">Your cart is currently empty</h1>
        <div class="mb-5">
            <p class="mb-1">Before you proceed to checkout you must add some products to your cart.</p>
            <p>You will find a lot of interesting products on our "Shop" page.</p>
        </div>
        <ReturnToShop></ReturnToShop> 
    </div>
</template>

<style scoped>
p {
    margin: 0;
}
</style>