<script setup>
import { onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../../store/cart'
import { useProductsList } from '../../store/products'
import Error from '../Error.vue'
import ReturnToShop from '../cart/GiveMeYourMoney.vue'

const router = useRouter();
const cartStore = useCartStore();

function noPurchaseRedirect() {
    if (!cartStore.hasPurchased) router.push('/');
}
//noPurchaseRedirect();

const productsStore = useProductsList();
const receipt = ref({});
const hasError = ref(false);
const errorMessage = "An error ocurred while setting up your purchase information. But don't worry, your purchase was succesfull!";

function setReceiptData() {
    try {
        receipt.value = cartStore.purchase;
        console.log(receipt.value)
        receipt.value.checkout.products.forEach(receiptItem => {
            const product = productsStore.products.find(product => product.id === receiptItem.id);
            receiptItem.name = product.name;
            receiptItem.image = product.image;
            receiptItem.price = product.price;
        });
        console.log(receipt.value);
    } catch (error) {
        console.error("Error:", error);
        hasError.value = true;
    }    
}
if (cartStore.purchase.success) setReceiptData();

onUnmounted(() => cartStore.purchase = {});
</script>

<template>
    <div v-if="cartStore.purchase.success"></div>
    <Error :message="errorMessage" v-else-if="hasError"></Error>
    <Error :message="cartStore.purchase.error" v-else></Error>
    <div>Purchase page</div>
    <ReturnToShop></ReturnToShop>
</template>
