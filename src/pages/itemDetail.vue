<script>

import { useProductsList } from '../store/products.js'
import { mapState, mapActions } from 'pinia'
import itemButton from '../components/home/item/itembutton.vue'
import selectQuantaty from '../components/itemDetail/selectQuantaty/selectQuantaty.vue'

import { useCartStore } from '../store/cart.js'
export default {

    computed: {
        isInCart: function () {
            return this.items.some(
                (item) => item.id == this.$route.params.id
            )
        },
        product: function () {
            return this.products.find(
                (product) => product.id == this.$route.params.id
            )
        },
        ...mapState(useCartStore, ['items']),
        ...mapState(useProductsList, ['products']),
    },
    data() {
        return {
            quantity: 1,
            add: false
        }
    },
    methods: {
        setQuantaty: function (quantity) {
            this.quantity = quantity;
        },
        ...mapActions(useCartStore, ['addToCart']),
    },
    components: {
        itemButton,
        selectQuantaty
    }
}
</script>

<template>
    <div v-if="add" class="alert alert-success" role="alert">
        Item add to cart
    </div>
    <div class="container py-5 my-5">
        <div class="row">
            <div class="col-md-6">
                <div class="d-flex">
                    <img :src="product.image" alt="" class="img-fluid">
                </div>
            </div>
            <div class="col-md-6">

                <h1>
                    {{ product.name }}
                </h1>
                <p class="price">
                    {{ product.price }}€
                </p>
                <p v-if="product.quantity == 0">
                    Sold off
                </p>

                <p v-if="product.quantity < 3 && product.quantity > 0">
                    Few Units
                </p>

                <span v-if="product.quantity >= 3">
                    In stock
                </span>
                <div class="d-flex mt-4" v-if="product.quantity > 0 && !isInCart">
                    <selectQuantaty :maxQuantity="product.quantity" @setQuantaty="setQuantaty" />
                    <itemButton @addToCart="addToCart" :product="product" :quantity="quantity"
                        @customClick="() => { add = true }" />
                </div>
                <div class="error" v-if="isInCart">
                    Item is already in cart
                </div>
            </div>
        </div>
        <div class="mt-5">
            <h2>Product Details</h2>
            <p>
                {{ product.description }}
            </p>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-size: 1.5rem;
}

img {

    max-height: 250px;
    margin: auto;
}

.price {
    font-size: 1.875rem;
}

.error {
    color: red;
}
</style>