import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
import App from './App.vue'
import router from '@/router'

import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'
import '@/style/index.less'
import 'normalize.css'
import 'uno.css'

const app = createApp(App)
app.use(router).use(pinia).mount('#app')
