import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { loginPlugin } from '@/stores/login'

const app = createApp(App)

const pinia = createPinia()
pinia.use(loginPlugin)

app.use(pinia)
app.use(router)

app.mount('#app')
