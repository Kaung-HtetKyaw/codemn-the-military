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

// const isProd = process.env.NODE_ENV === "production";

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID,
  router,
  // debug: {
  //   enabled: !isProd,
  //   sendHitTask: isProd,
  // },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
