/*
 * @Author: your name
 * @Date: 2020-07-02 09:16:50
 * @LastEditTime: 2020-08-03 16:20:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [{
      path: '/index',
      name: 'Index',
      component: () => import('../views/home/Index.vue')
    }, {
      path: '/compaines',
      name: 'Compaines',
      component: () => import('../views/companies/Compaines.vue')
    },
      {
        path: '/produce',
        name: 'Produce',
        component: () => import('../views/produce/Produce.vue')
      },
      {
        path: '/producelist',
        name: 'Producelist',
        component: () => import('../views/produce/Producelist.vue')
      },
      {
        path: '/productlist',
        name: 'Productlist',
        component: () => import('../views/product/Productlist.vue')
      },

      {
        path: '/newneeds',
        name: 'NewNeeds',
        component: () => import('../views/needs/NewNeeds.vue')
      }
    ]
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('../views/user/Login.vue')
  }, {
    path: '/register',
    name: 'Register',
    component: () => import('../views/user/Register.vue')
  }, {
    path: '/forget',
    name: 'Forget',
    component: () => import('../views/user/Forget.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router