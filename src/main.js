import Vue from 'vue'
import fastclick from 'fastclick';
import App from './App'
import router from './router'

Vue.config.productionTip = false

fastclick.attach(document.body);

/* eslint-disable no-new */
export const root = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
