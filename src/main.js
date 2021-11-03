import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import './axios'

createApp(App).use(router).use(VueScrollTo).mount('#app')
