<script setup>
import Method from './Method.vue'

//This should probably come from somewhere else and not be defined here
//Add whatever logo source and alt description for available payment methods...
const methods = [
    {
        src: "https://www.mastercard.pt/content/dam/public/mastercardcom/eu/pt/images/logo/logo/mc-logo-52.svg",
        alt: "Mastercard Logo"
    },
    {
        src: "https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg",
        alt: "Paypal Logo"
    },
    {
        src: "https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png",
        alt: "Visa Logo"
    },
    {
        src: "https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-bluebox-solid.svg",
        alt: "American Express Logo"
    },
]
</script>

<template>
    <ul class="d-flex list-unstyled column-gap-4 p-0 flex-wrap row-gap-4 justify-content-center">
        <li v-for="(method, index) in methods" :key="index">
            <Method :src="method.src" :alt="method.alt"></Method>
        </li>
    </ul>
</template>