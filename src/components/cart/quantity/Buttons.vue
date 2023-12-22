<script setup>
import MinusButton from './MinusButton.vue'
import PlusButton from './PlusButton.vue'
import Number from './Number.vue'
import TrashButton from './TrashButton.vue'
defineProps({
    itemId : Number,
    quantity: Number,
    cartQuantity: Number,
})
</script>

<template>
    <div class="quantity-container">
        <MinusButton class="minus-button" :item-id="itemId" v-if="cartQuantity > 1"></MinusButton>
        <Number class="quantity" :cart-quantity="cartQuantity"></Number>
        <PlusButton class="plus-button" :item-id="itemId" v-if="cartQuantity < quantity"></PlusButton>
    </div>
    <div class="d-flex gap-3">
        <TrashButton :item-id="itemId"></TrashButton>
    </div>
</template>

<style scoped>
.quantity-container {
    display: grid;
    grid-template-columns: 42px 1fr 42px;
    grid-template-areas: "minus quantity plus";
}

.minus-button {
    grid-area: minus;
}

.quantity {
    grid-area: quantity;
}

.plus-button {
    grid-area: plus;
}
</style>