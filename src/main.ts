import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { piniaPersistedState } from './stores/piniaPersistedState'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();

pinia.use(piniaPersistedState);

app.use(pinia);
app.use(router)

app.mount('#app')
