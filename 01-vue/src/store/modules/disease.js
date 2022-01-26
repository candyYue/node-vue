import 'babel-polyfill' //转换es6+语法
import { createStore } from 'vuex'
import * as actionFn from '../../request/action'

export default createStore({
  namespaced: true,
  state: {
    test:'disease'
  },
  getters: ()=>({
    test: state => state.test,
  }),
  mutations: {
    getChinaDis (state, value) {
      
    },
  },
  actions: {
    getChinaDis : (context, payload) => (
      actionFn.getChinaDis(payload)
    ),
  },
})
