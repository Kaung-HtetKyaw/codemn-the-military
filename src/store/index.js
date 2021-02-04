import Vue from "vue";
import Vuex from "vuex";
import * as ui from "./ui";
import * as news from "./news";
import * as events from "./events";
import * as products from "./products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { ui, news, events, products },
});
