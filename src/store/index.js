import Vue from "vue";
import Vuex from "vuex";
import * as ui from "./modules/ui";
import * as news from "./modules/news";
import * as events from "./modules/events";
import * as products from "./modules/products";
import * as notifications from "./modules/notifications";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { ui, news, events, products, notifications },
});
