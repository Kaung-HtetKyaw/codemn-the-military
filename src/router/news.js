import Layout from "@/layouts/header-included.vue";
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
