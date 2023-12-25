<script>

import { useProductsList } from '../store/products.js'
import { mapState, mapActions } from 'pinia'
import itembutton from '../components/home/item/itembutton.vue'
export default {

    computed: {
        product: function () {
            return this.products.find(
                (product) => product.id = this.$route.params.id
            )
        },
        ...mapState(useProductsList, ['products'])
    },
    components: {
        itembutton
    }
}
</script>

<template>
    <img :src="product.image" alt="">
    <h1>
        {{ product.name }}
    </h1>
    <p>
        {{ product.description }}
    </p>
    <itembutton :product="product"/>
</template>