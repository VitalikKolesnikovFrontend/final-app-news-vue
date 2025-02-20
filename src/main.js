import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { plugin as FormKit, defaultConfig } from '@formkit/vue'
import { useAuthStore } from './stores/registerStore'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
app.use(FormKit, defaultConfig)
app.use(ElementPlus)
app.use(pinia)
app.use(router)

app.mount('#app')

const authStore = useAuthStore()
authStore.initializeAuth()
