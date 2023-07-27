import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"



import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Searchalbum from './components/Searchalbum.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        
        { path: '/', component: Home},
        { path: '/searchalbum', component: Searchalbum},
    ]
});

const app = createApp(App)
app.component('home', Home)
app.use(router);


app.mount('#app')

