import 'babel-polyfill' //转换es6+语法
import { createStore } from 'vuex'
import * as actionFn from '../request/action'

import modules from './modules'
// import Vue from 'vue'
// import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
// import {
//   changeLimit
// } from './actions'

// Vue.use(Vuex)
export default createStore({
  modules,
  state: {
    number: 1
  },
  getters: {
    number: state => state.number,
  },
  mutations: {
    getNumber (state, value) {
      state.number = value
    },
  },
  actions: {
    getNumber: (context, payload) => {
      context.commit({
        type: 'getNumber',
        state: payload
      })
    },
    uploadAudioFile : (context, payload) => (
      actionFn.uploadAudioFile(payload)
    ),
  },
  // plugins: [createPersistedState({
  //   storage: window.sessionStorage,
  //   reducer (val) {
  //     return {
  //     }
  //   }
  // })]
})
