<script>
import Footer from './components/footer.vue'
import Navbar from './components/navbar.vue'
import { useProductsList } from '../src/store/products.js'
import { mapState, mapActions } from 'pinia'
import { saveProductsCache } from './api/products.js'
export default {
  components: {
    Footer,
    Navbar,
  },
  async mounted() {

    const cache = await saveProductsCache()
    this.addDate(cache.Date);
    this.addProductList(cache.Products)
  },
  computed: {
    ...mapState(useProductsList, ['date', 'products']),
  },
  methods: {
    ...mapActions(useProductsList, ['addDate', 'addProductList'])
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
