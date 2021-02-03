import Layout from "@/layouts/header-included.vue";
import store from "@/store/index.js";
export default [
  {
    path: "/events",
    name: "Events",
    component: () =>
      import(/* webpackChunkName: "events" */ "../views/events/events.vue"),
    meta: {
      title: "events",
      layout: Layout,
    },
    beforeEnter(to, from, next) {
      store.dispatch("ui/setPageTitle", "events");
      next();
    },
  },
];
