import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { plugin as FormKit, defaultConfig } from '@formkit/vue'

const app = createApp(App)
app.use(FormKit, defaultConfig)
app.use(ElementPlus)
app.use(createPinia())

app.mount('#app')
