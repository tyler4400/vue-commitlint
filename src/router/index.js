import Vue from "vue";
import VueRouter from "vue-router";
import NewConsole from "../views/NewConsole";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "重写console对象",
    component: NewConsole
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/vue-promised",
    name: "开源库vue-promised的使用",
    component: () => import("@/views/vue-promised")
  }
];

const router = new VueRouter({
  routes
});
export { routes };
export default router;
