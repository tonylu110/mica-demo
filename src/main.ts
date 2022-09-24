import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { createApp } from 'vue'
import './style.css'
import './mica.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
