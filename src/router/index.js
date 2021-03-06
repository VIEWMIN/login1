import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import login from "../views/login.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;