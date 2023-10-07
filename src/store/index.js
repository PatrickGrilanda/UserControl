import { createStore } from 'vuex'
import { api } from '@/services/api.js';

export default createStore({
  state: {
    user: {
      name: 'John Doe',
      image: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      role: 'Admin',
      age: 26
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
    },
    getUser(context, payload) {
      return api.get(`/users/${payload}`);
    },
  },
  modules: {
  }
})
