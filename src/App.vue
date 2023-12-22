<script>
import Footer from './components/footer.vue'
import Navbar from './components/navbar.vue'
import axios from 'axios'
import { useProductsList } from '../src/store/products.js'
import { mapState, mapActions } from 'pinia'
export default {
  components: {
    Footer,
    Navbar,
  },
  async mounted() {
    
    this.addProductList(JSON.parse(localStorage.getItem('Products')))
    this.addDate(this.addDate(localStorage.getItem('Date')));
    if (this.date == null || this.date < Date.now()) {
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
  <nav>
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">List</a>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contact">Contact</router-link>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">Car</a>
      </li>
    </ul>

  </nav>
  <header>
    <!--<img src="https://fakeimg.pl/1920x1080/" alt="">-->
  </header>
  <main>
    <router-view />
  </main>
  <Footer />
</template>
