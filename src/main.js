import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { plugin as FormKit, defaultConfig } from '@formkit/vue'

const app = createApp(App)
const pinia = createPinia()
app.use(FormKit, defaultConfig)
app.use(ElementPlus)
app.use(pinia)

app.mount('#app')
