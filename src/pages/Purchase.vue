<script setup>
import { onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/cart'
import { useProductsList } from '../store/products'
import Error from '../components/Error.vue'
import ReturnToShop from '../components/cart/GiveMeYourMoney.vue'
import Receipt from '../components/purchase/Receipt.vue'

const router = useRouter();
const cartStore = useCartStore();

function noPurchaseRedirect() {
    if (!cartStore.hasPurchased) router.push('/');
}
noPurchaseRedirect();

const productsStore = useProductsList();
const hasError = ref(false);
const errorMessage = "An error ocurred while setting up your purchase information. But don't worry, your purchase was succesfull!";

function setReceiptData() {
    try {
        console.log(cartStore.purchase)
        cartStore.purchase.checkout.products.forEach(purchasedItem => {
            const product = productsStore.products.find(product => product.id === purchasedItem.id);
            purchasedItem.name = product.name;
            purchasedItem.image = product.image;
            purchasedItem.price = product.price;
        });
        console.log(cartStore.purchase);
    } catch (error) {
        console.error("Error:", error);
        hasError.value = true;
    }    
}
if (cartStore.purchase.success) setReceiptData();

onUnmounted(() => cartStore.purchase = {});
</script>

<template>
    <div class="d-grid justify-content-center">
        <div v-if="cartStore.purchase.success">
            <h1 class="mb-5 text-center">Thank you for your purchase!</h1>
            <Receipt></Receipt>
        </div>
        <Error :message="errorMessage" v-else-if="hasError"></Error>
        <Error :message="cartStore.purchase.error" v-else></Error>
        <div class="text-center">
            <ReturnToShop class="mt-5"></ReturnToShop>
        </div>
    </div>
</template>