import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { createApp } from 'vue'
import './style.css'
import './mica.css'
import App from './App.vue'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
