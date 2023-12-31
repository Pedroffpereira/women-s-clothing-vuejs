<script>

import { useProductsList } from '../store/products.js'
import { mapState, mapActions } from 'pinia'
import itembutton from '../components/home/item/itembutton.vue'
import selectQuantaty from '../components/itemDetail/selectQuantaty/selectQuantaty.vue'

import { useCartStore } from '../store/cart.js'
export default {

    computed: {
        product: function () {
            return this.products.find(
                (product) => product.id = this.$route.params.id
            )
        },
        ...mapState(useProductsList, ['products']),
    },
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        setQuantaty: function(quantity) {
            this.quantity = quantity;
        },
        ...mapActions(useCartStore, ['addToCart']),
    },
    components: {
        itembutton, 
        selectQuantaty
    }
}
</script>

<template>
    <div class="container py-5 my-5">
        <div class="row">
            <div class="col-md-6">
                <img :src="product.image" alt="" class="img-fluid">
            </div>
            <div class="col-md-6">

                <h1>
                    {{ product.name }}
                </h1>
                <p class="price">
                    {{ product.price }}€
                </p>
                <p v-if="product.quantity == 0">
                    Esgotado
                </p>

                <p v-if="product.quantity < 3">
                    Poucas Unidades

                </p>

                <span v-if="product.quantity >= 3">
                    Em stock
                </span>
                <div class="d-flex">
                    <selectQuantaty :maxQuantity="product.quantity" @setQuantaty="setQuantaty"/>
                    <itembutton :product="product" :quantity="quantity"/>
                </div>
            </div>
        </div>
        <h2>Detalhes Do produto</h2>
        <p>
            {{ product.description }}
        </p>
    </div>
</template>

<style scoped>
h1 {
    font-size: 1.5rem;
}

.price {
    font-size: 1.875rem;
}
</style>