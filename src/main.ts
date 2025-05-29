import { createApp } from 'vue'
import '@/assets/scss/global.scss'
import App from './App.vue'
import {createPinia} from "pinia";

const app = createApp(App)
const pinia = createPinia();

app.use(pinia)
    .mount('#app')
