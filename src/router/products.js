import Layout from "@/layouts/header-included.vue";
import store from "@/store/index.js";
export default [
  {
    path: "/products/:type(most-used|popular|casual|barely)",
    name: "Products",
    component: () =>
      import(
        /* webpackChunkName: "products" */ "../views/products/products.vue"
      ),
    meta: {
      title: "most-used",
      layout: Layout,
    },
    beforeEnter(to, from, next) {
      store.dispatch("ui/setPageTitle", to.params.type);
      next();
    },
  },
];
