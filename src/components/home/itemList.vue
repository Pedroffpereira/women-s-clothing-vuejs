<script>
import item from './item.vue'
import { useProductsList } from '../../store/products'
import { mapState, mapActions } from 'pinia'
export default {
    props: {
        searchName: String,
    },
    components: {
        item
    },
    computed: {
        products: function () {
            return this.searchProductList(this.searchName)
        }
    },
    methods: {
        ...mapActions(useProductsList, ['searchProductList'])
    }
}

</script>
<template>
    <div class="row my-5">
        <div class="col-md-3" v-for="product in products">
            <item :product="product" />
        </div>
    </div>
</template>