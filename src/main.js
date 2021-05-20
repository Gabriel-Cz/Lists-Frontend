import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import '@/assets/tailwind.css'

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')

/*axios.defaults.baseURL = 'https://sharedlists-backend.herokuapp.com';*/
axios.defaults.baseURL = "http://localhost:3000"


