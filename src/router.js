import { createRouter, createWebHistory } from "vue-router"
import Home from "./pages/Home.vue"
import Contact from "./pages/ContactPage.vue"
import list from "./pages/List.vue"
import itemDetail from "./pages/itemDetail.vue"
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
            path: '/contact',
            component: Contact
        },
        {
            path: '/list',
            component: list
        },
        {
            path: '/item/:id',
            component: itemDetail
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