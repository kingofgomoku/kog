import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LandingPage.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/game/:id",
    name: "GameBoard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameBoard.vue")
  },
  {
    path: "/home",
    name: "LandingPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LandingPage.vue")
  },
  {
    path: "/tt",
    name: "TestPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/testpage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     let user;
//     Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
//       .then((data) => {
//         if (data && data.signInUserSession) {
//           user = data;
//         }
//         next();
//       })
//       .catch((e) => {
//         next({
//           path: "/signin",
//         });
//       });
//   }
//   next();
// });

export default router;
