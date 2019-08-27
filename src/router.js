import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/empleos",
      name: "empleos",
      component: () => import("./views/Empleos.vue")
    },
    {
      path: "/contacto",
      name: "contacto",
      component: () => import("./views/Contacto.vue")
    },
    {
      path: "/registrar-usuario",
      name: "registrar-usuario",
      component: () => import("./views/RegistrarUsuario.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/recuperar-password",
      name: "recuperar-password",
      component: () => import("./views/RecuperarPassword.vue")
    }
  ]
});
