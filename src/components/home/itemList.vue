<script>
import item from './item.vue'
import { useProductsList } from '../../store/products'
import { mapState, mapActions } from 'pinia'
export default {
    components: {
        item
    },
    computed: {
        ...mapState(useProductsList, ['date', 'products'])
    }
}

</script>
<template>
    <div class="row">
        <div class="col-md-3" v-for="product in products">
            <item :product="product" />
        </div>
    </div>
</template>