import Vue from 'vue';
import fastclick from 'fastclick';
import App from './App';
import router from './router';

require('./assets/styles/fontawesome/font-awesome.scss');
require('./assets/styles/global.scss');

Vue.config.productionTip = false;

fastclick.attach(document.body);

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
