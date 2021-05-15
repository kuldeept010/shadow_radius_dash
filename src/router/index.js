import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import srButton from "../components/srButton.vue";
import srNavigation from "../components/srNavigation.vue";
// import srTextField from "../components/srTextField.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/button",
    name: "Button",
    component: srButton,
  },
  {
    path: "/nav",
    name: "Nav",
    component: srNavigation,
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
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
