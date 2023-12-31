import { createRouter, createWebHistory } from "vue-router"
import Home from "./pages/Home.vue"
import Contact from "./pages/ContactPage.vue"
import list from "./pages/List.vue"
import itemDetail from "./pages/itemDetail.vue"
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
        }
    ]
})