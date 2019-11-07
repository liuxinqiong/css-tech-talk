import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import InlineBox from "../views/InlineBox.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/inline-box",
    name: "inline-box",
    component: InlineBox
  },
  {
    path: "/z-index",
    name: "z-index",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ZIndex.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
