import firebase from 'firebase';
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp.vue";
import FeedbackForm from "@/components/FeedbackForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: '/login'
  },
  {
    path: "/",
    name: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/members/:memberId",
    name: "FeedbackForm",
    component: FeedbackForm,
    meta: {
      requiresAuth: true
    }
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth && !currentUser) next('login');
  else if(!requiresAuth && currentUser) 
  next('home');
  else next();
});

export default router;
