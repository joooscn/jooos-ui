import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import app from './module/app'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    app,
  },
  getters
})
