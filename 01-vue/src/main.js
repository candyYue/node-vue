import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import store  from './store'
import '@/assets/css/common.scss'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
