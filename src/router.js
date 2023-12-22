import { createRouter, createWebHistory } from "vue-router"
import Home from "./pages/Home.vue"
import Contact from "./pages/ContactPage.vue"
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
        }
    ]
})