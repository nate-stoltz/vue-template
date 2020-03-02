import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './router/routes'

import '../assets/styles/styles.scss'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({ mode: 'history', routes })

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
