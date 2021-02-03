import Layout from "@/layouts/header-included.vue";
import store from "@/store/index.js";
export default [
  {
    path: "/news",
    name: "News",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/news/news.vue"),
    meta: {
      title: "news",
      layout: Layout,
    },
    beforeEnter(to, from, next) {
      store.dispatch("ui/setPageTitle", "news");
      next();
    },
  },
  {
    path: "/news/:id",
    name: "News-Single",
    component: () =>
      import(
        /* webpackChunkName: "news-single" */ "../views/news/newsSingle.vue"
      ),
    meta: {
      layout: Layout,
    },
  },
];
