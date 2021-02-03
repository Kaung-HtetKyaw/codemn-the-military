import Layout from "@/layouts/header-included.vue";

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
  },
];
