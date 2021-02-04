import Layout from "@/layouts/header-included.vue";
export default [
  {
    path: "/songs",
    name: "Songs",
    component: () =>
      import(/* webpackChunkName: "songs" */ "../views/songs/index.vue"),
    meta: {
      title: "songs",
      layout: Layout,
    },
  },
];
