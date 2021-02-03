import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// dep
import NProgress from "nprogress";
import store from "@/store/index.js";
//routes
import productRoutes from "./products";
import newsRoutes from "./news";
import eventRoutes from "./events";
// layouts
import defaultLayout from "@/layouts/default.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: defaultLayout,
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      layout: defaultLayout,
    },
  },
  ...productRoutes,
  ...newsRoutes,
  ...eventRoutes,
];

function setDefaultLayout(routes) {
  let result = routes.map((route) => {
    if (!route.meta?.layout) {
      route.meta = {
        layout: defaultLayout,
      };
    }
    return route;
  });
  return result;
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: setDefaultLayout(routes),
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  store.dispatch("ui/setPageTitle", "");
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
