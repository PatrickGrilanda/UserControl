import { createStore } from 'vuex'
import { api } from '@/services/api.js';

export default createStore({
  state: {
    user: {
      name: 'John Doe',
      email: '',
      phone: '',
    },
    users: []
  },
  getters: {
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setUsers(state, payload) {
      state.users = payload
    }
  },
  actions: {
    getUsers(context) {
      api.get('/users')
        .then((response) => {
          context.commit('setUsers', response.data)
        })
    }
  },
  modules: {
  }
})
