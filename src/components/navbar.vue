<script>

import { useCartStore } from '../store/cart.js'
import { mapState, mapActions } from 'pinia'
export default {

    computed: {
        ...mapState(useCartStore, ['items']),
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
                <router-link class="nav-link" to="/list">List</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" to="/cart">Cart({{ items.length }})</router-link>
            </li>
        </ul>

    </nav>
</template>
<style scoped>
a {
    color: black;
    text-underline-offset: 5px;
}

a:hover {
    color: black;
    text-decoration: underline;
    text-underline-offset: 5px;
}

.router-link-active {
    text-decoration: underline;
    color: black;
    text-underline-offset: 5px;
}
</style>