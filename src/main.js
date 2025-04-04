import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import i18n from './i18n'

import './assets/css/style.css'

createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app');
