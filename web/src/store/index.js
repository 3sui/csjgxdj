/*
 * @Author: your name
 * @Date: 2020-07-02 09:16:50
 * @LastEditTime: 2020-08-27 22:18:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Dialog: false,
    user: {}
  },
  mutations: {
    DialogHidden(state) {
      state.Dialog = false
    },
    DialogVisible(state) {
      state.Dialog = true
    },
    changeUser(state, data) {
      state.user = data
    }
  },
  actions: {},
  modules: {}
})