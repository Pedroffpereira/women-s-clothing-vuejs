<script>
import Footer from './components/footer.vue'
import Navbar from './components/navbar.vue'
import { useProductsList } from '../src/store/products.js'
import { mapState, mapActions } from 'pinia'
import { saveProductsCache } from './api/products.js'
import { setCart } from './api/cart'
import { useCartStore } from '../src/store/cart'
export default {
  components: {
    Footer,
    Navbar,
  },
  async mounted() {
    const cache = await saveProductsCache()
    this.addDate(cache.Date);
    this.addProductList(cache.Products)

    const cart = setCart(cache.Products)
    this.addCart(cart)
  },
  computed: {
    ...mapState(useProductsList, ['date', 'products']),
    ...mapState(useCartStore, ['items']),
  },
  methods: {
    ...mapActions(useProductsList, ['addDate', 'addProductList']),
    ...mapActions(useCartStore, ['addCart'])
  }
}

</script>

<template>
  <Navbar />
  <main>
    <router-view />
  </main>
  <Footer />
</template>
