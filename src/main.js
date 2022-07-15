import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import './assets/FortAwesome-Font-Awesome-fcec2d1/css/all.css'
import './assets/styles/style.css'

const moment = require('moment')
console.log(moment().format('LTS'))

const app = createApp(App)
app.use(router)
app.mount('#app')
