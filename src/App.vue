<script>
import Footer from './components/footer.vue'
import Navbar from './components/navbar.vue'
import Header from './components/header.vue'
export default {
  components: {
    Footer,
    Navbar,
    Header
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
