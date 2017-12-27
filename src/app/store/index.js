/*
  
  store/index.js

*/

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productData: null,
    quantity: 1
  },

  mutations: {
    setProductData (state, obj) {
      state.productData = { ...obj };
    },

    incQuantity (state) {
      state.quantity++;
    },

    decQuantity (state) {
    	if(state.quantity > 0) state.quantity--;   
    }
  }
});