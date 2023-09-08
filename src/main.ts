import { createApp } from 'vue'
import './assets/style/style.css'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()
import App from './App.vue'
import { datepicker } from './plugins/datepicker'
import { scrollbar } from './plugins/scrollbar'
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(datepicker)
app.use(scrollbar)
app.mount('#app')
