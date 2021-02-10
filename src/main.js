import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueObserveVisibility from "vue-observe-visibility";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;
Vue.use(VueObserveVisibility);

Vue.use(VueAnalytics, {
  id: "UA-189414101-1",
  router,
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
