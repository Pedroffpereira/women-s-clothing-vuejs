<script>
import Footer from './components/footer.vue'
import Navbar from './components/navbar.vue'
import Header from './components/header.vue'
import axios from 'axios'
import { useProductsList } from '../src/store/products.js'
import { mapState, mapActions } from 'pinia'
export default {
  components: {
    Footer,
    Navbar,
    Header
  },
  async mounted() {
    
    this.addProductList(localStorage.getItem('Products'))
    this.addDate(localStorage.getItem('Date'));
    if (this.date != null || this.date < Date.now()) {
      const products = await axios.get(import.meta.env.VITE_BACKEND_URL + 'products')
      this.addProductList(products.data)
      this.addDate(Date.now() + (30 * 60 * 1000));
      localStorage.setItem('Products', JSON.stringify(products.data))
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
  <Header />
  <main class="container my-5 py-5">
    <router-view />
  </main>
  <Footer />
</template>
