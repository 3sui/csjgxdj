/*
 * @Author: your name
 * @Date: 2020-07-02 09:16:50
 * @LastEditTime: 2020-08-21 16:15:38
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
      },{
        path: '/compaines',
        name: 'Compaines',
        component: () => import('../views/companies/Compaines.vue')
      }, 
      {
        path: '/companyDetail',
        name: 'companyDetail',
        component: () => import('../views/companies/CompanyDetail.vue')
      }, {
        path: '/ProductIndex',
        name: 'ProductIndex',
        component: () => import('../views/products/ProductIndex.vue')
      }, {
        path: '/productDetail',
        name: 'productDetail',
        component: () => import('../views/products/ProductDetail.vue')
      },
      {
        path: '/produce',
        name: 'Produce',
        component: () => import('../views/produce/Produce.vue')
      },
      {
        path: '/produceDetail',
        name: 'ProduceDetail',
        component: () => import('../views/produce/ProduceDetail.vue')
      },
      {
        path: '/producelist',
        name: 'Producelist',
        component: () => import('../views/produce/Producelist.vue')
      },
      {
        path: '/productlist',
        name: 'Productlist',
        component: () => import('../views/products/Productlist.vue')
      },

      {
        path: '/newneeds',
        name: 'NewNeeds',
        component: () => import('../views/needs/NewNeeds.vue')
      },
      {
        path: '/quotedprice',
        name: 'QuotedPrice',
        component: () => import('../views/needs/QuotedPrice.vue')
      },
      {
        path: '/appindex',
        name: 'AppIndex',
        component: () => import('../views/app/AppIndex.vue')
      },
      {
        path: '/appinfo',
        name: 'AppInfo',
        component: () => import('../views/app/AppInfo.vue')
      },
     
    ]
  },
  //后台
  {
    path: '/backmanage',
    name: 'backmanage',
    component: () => import('../components/backmanage/main.vue'),
    children:[
       {
        path: '/control',
        name: 'Control',
        meta:{
          title:"主页"
        },
        component: () => import('../views/control/Control.vue')
      },
      {
        path: '/back',
        name: 'Back',
        component: () => import('../views/control/Back.vue')
      }, {
        path: '/AddUserInfo',
        name: 'AddUserInfo',
        component: () => import('../views/user/AddUserInfo.vue')
      }, {
        path: '/AddBusinessInfo',
        name: 'AddBusinessInfo',
        component: () => import('../views/user/AddBusinessInfo.vue')
      }, {
        path: '/interconnection',
        name: 'interconnection',
        component: () => import('../views/Interconnection/Interconnection.vue')
      }, {
        path: '/ProduceInfo',
        name: 'ProduceInfo',
        component: () => import('../views/Interconnection/ProduceInfo.vue')
      }, {
        path: '/supply',
        name: 'supply',
        component: () => import('../views/docking/Supply.vue')
      }, {
        path: '/Demand',
        name: 'Demand',
        component: () => import('../views/docking/Demand.vue')
      },{
        path: '/Productmanage',
        name: 'Productmanage',
        component: () => import('../views/control/Productmanage.vue'),
        meta: {
          title: "商品管理"
        },
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/user/Login.vue')
  }, {
    path: '/register',
    name: 'Register',
    component: () => import('../views/user/Register.vue')
  }, 
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('../views/user/Forget.vue')
  }, {
    path: '/business',
    name: 'Business',
    component: () => import('../views/user/Business.vue')
  }, {
    path: '/Finished',
    name: 'Finished',
    component: () => import('../views/user/Finished.vue')
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