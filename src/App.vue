<script>
import Footer from './components/footer.vue'
import Navbar from './components/navbar.vue'
import { useProductsList } from '../src/store/products.js'
import { mapState, mapActions } from 'pinia'
import { getProducts } from './api/products.js'
export default {
  components: {
    Footer,
    Navbar,
  },
  async mounted() {

    this.addDate(JSON.parse(localStorage.getItem('Date')));
      this.addProductList(JSON.parse(localStorage.getItem('Products')))
    if (this.date == null || this.date < Date.now()) {
      const products = await getProducts()
      this.addProductList(products)
      this.addDate(Date.now() + (30 * 60 * 1000));
      localStorage.setItem('Products', JSON.stringify(products))
      localStorage.setItem('Date', JSON.stringify(Date.now() + (30 * 60 * 1000)))
    }
  },
  computed: {
    ...mapState(useProductsList, ['date', 'products'])
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
