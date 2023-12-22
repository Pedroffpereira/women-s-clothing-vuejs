<script setup>
import Article from './article/Article.vue'
import Buttons from './quantity/Buttons.vue'
defineProps({
    item : {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="row align-items-center row-gap-3">
        <div class="col-md d-flex">
            <Article :item="item"></Article>
        </div>
        <div class="col-md-auto d-flex justify-content-end column-gap-3">
            <Buttons :item-id="item.id" :cart-quantity="item.cartQuantity" :quantity="item.quantity"></Buttons>
        </div>
    </div>
</template>

<style scoped>
</style>
