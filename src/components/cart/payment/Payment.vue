<script setup>
import TotalPrice from './TotalPrice.vue'
import Discount from './Discount.vue'
import Total from './Total.vue'
import Button from './Button.vue'
import Methodlist from './Methodlist.vue' 
</script>

<template>
    <div class="d-grid row-gap-4">
        <div class="d-grid row-gap-2">
            <TotalPrice></TotalPrice>
            <Discount></Discount>
            <Total></Total>
        </div>
        <div class="d-grid">
            <Button></Button>
        </div>
        <div class="d-grid justify-content-center">
            <Methodlist></Methodlist>
        </div>
    </div>
</template>