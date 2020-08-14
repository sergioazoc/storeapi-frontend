import Vue from "vue";
import Vuex from "vuex";
import api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: null,
    error: false
  },
  mutations: {
    getProducts(state, data) {
      if (data[0] === "error") {
        state.error = true;
      } else {
        state.products = data;
      } 
    }
  },
  actions: {
    getProducts: (context) => {
      api.getProducts().then(data => {
        context.commit("getProducts", data);
      });
    }
  },
  modules: {}
});
