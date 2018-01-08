import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messageListItems: [],
  },
  mutations: {
    prepend(state, payload) {
      state.messageListItems.unshift(payload.item)
    },
  },
  plugins: [createPersistedState()],
})
