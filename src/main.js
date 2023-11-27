import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import pinia from './pinia.js'


import 'bootstrap/dist/css/bootstrap.css';
const app = createApp(App)
app.use(pinia)
app.use(router)



app.mount('#app')
