import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Customeroverview from "@/views/Customeroverview";
import Customeraccounts from "@/views/Customeraccounts";
import Depositmoney from "@/views/Depositmoney";
import Openaccount from "@/views/Openaccount";
import Withdrawmoney from "@/views/Withdrawmoney";
import Transfermoney from "@/views/Transfermoney";
import Allacounts from "@/views/Allaccounts";
import Alltransfers from "@/views/Alltransfers";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }},
  {
    path: '/register',
    name: 'register',
    component: Register
  },

  {
    path: '/customeroverview',
    name: 'customeroverview',
    component: Customeroverview
  },

  {
    path: '/customeraccounts',
    name: 'customeraccounts',
    component: Customeraccounts
  },

  {
    path: '/depositmoney',
    name: 'depositmoney',
    component: Depositmoney
  },
  {
    path: '/openaccount',
    name: 'openaccount',
    component: Openaccount
  },
  {
    path: '/transfermoney',
    name: 'transfermoney',
    component: Transfermoney
  },
  {
    path: '/withdrawmoney',
    name: 'withdrawmoney',
    component: Withdrawmoney
  },
  {
    path: '/allaccounts',
    name: 'allaccounts',
    component: Allacounts
  },
  {
    path: '/alltransfers',
    name: 'alltransfers',
    component: Alltransfers
  }

]

const router = new VueRouter({
  routes
})

export default router
