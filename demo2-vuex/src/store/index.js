import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    message: 'hello vuex'
  },
  mutations: {
    addMessage(state) {
      return state.message += 666
    },
  },
  getters: {
  },
  actions: {
    delayAddMessage(context){
      setTimeout(()=>{
        context.commit('addMessage')
      },3000)
    }
  }
})