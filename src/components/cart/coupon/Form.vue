<script setup>
import { ref } from 'vue';
import { useCouponStore } from '../../../store/coupon';
import InputLabel from './InputLabel.vue';
import Input from './Input.vue';
import Submit from './Submit.vue';
import OutputLabel from './OutputLabel.vue';

const couponStore = useCouponStore();
const inputCode = ref("");
const couponMessage = ref("");
const wasCouponSubmitted = ref(false);

function setInputCode(input) {
    inputCode.value = input;
}

async function submitCoupon() {
    try {
        const response = await couponStore.submitCoupon(inputCode.value);
        if (!response) return;

        wasCouponSubmitted.value = true;

        if (response.success) {
            couponMessage.value = response.message;
        }
        else {
            couponMessage.value = response.error;
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
</script>

<template>
    <form class="d-grid row-gap-2" @submit.prevent="submitCoupon">
        <InputLabel></InputLabel>
        <div class="d-flex">
            <Input @coupon-input="setInputCode"></Input>
            <Submit></Submit>
        </div>
        <OutputLabel :text="couponMessage" :is-coupon-valid="couponStore.isCouponValid" v-if="wasCouponSubmitted"></OutputLabel>
    </form>
</template>
