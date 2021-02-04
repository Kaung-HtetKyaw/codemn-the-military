import Layout from "@/layouts/header-included.vue";
import store from "@/store/index.js";
export default [
  {
    path: "/products",
    name: "Products-Type",
    component: () =>
      import(
        /* webpackChunkName: "products-type" */ "../views/products/index.vue"
      ),
    meta: {
      title: "products",
      layout: Layout,
    },
  },
  {
    path: "/products/:type(most-used|most-known|less-used|often-used)",
    name: "Products",
    component: () =>
      import(
        /* webpackChunkName: "products" */ "../views/products/products.vue"
      ),
    meta: {
      layout: Layout,
    },
    async beforeEnter(to, from, next) {
      store.dispatch("ui/setPageTitle", to.params.type);
      next();
    },
  },
];
