import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* eslint-disable global-require */

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require.ensure(
        [],
        () => resolve(require('src/pages/home')
      ))
    },
  ],
});
