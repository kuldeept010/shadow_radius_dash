import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
  },
  {
    path: "/components",
    name: "Text Field",
    component: () => import("@/views/Components.vue"),
    props: true,
    children: [
      {
        path: "text-field",
        component: () => import("@/views/components/srTextField"),
      },
      {
        path: "button",
        component: () => import("@/views/components/srButton"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
