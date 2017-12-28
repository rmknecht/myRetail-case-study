import 'es6-promise/auto'; // polyfill necessary for IE11 development build

import Vue from 'vue';
import store from './store';
import App from './App.vue';

new Vue({
  store,
  el: '#app',
  render: (h) => h(App)
});