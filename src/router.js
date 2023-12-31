import { createRouter, createWebHistory } from "vue-router"
import Home from "./pages/Home.vue"
import Cart from "./pages/Cart.vue"
import Purchase from './pages/Purchase.vue'
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/purchase',
            component: Purchase
        },
    ]
})