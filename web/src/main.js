/*
 * @Author: your name
 * @Date: 2020-07-02 09:16:50
 * @LastEditTime: 2020-07-02 14:42:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\main.js
 */
import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'


import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css'

import 'quill/dist/quill.snow.css'

import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)
import 'normalize.css'
import '@/assets/css/style.css'

import './assets/scss/style.scss'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')