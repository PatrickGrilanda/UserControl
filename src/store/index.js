import { createStore } from 'vuex'
import { api } from '@/services/api.js';

export default createStore({
  state: {
    user: {},
    isAuthenticated: false,
    users: []
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getUsers(state) {
      return state.users
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setUsers(state, payload) {
      state.users = payload
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload
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
    login(context, payload) {
      api.get(`/users?email=${payload.email}&password=${payload.password}`)
        .then((response) => {
          if (response.data.length > 0) {
            context.commit('setUser', response.data[0])
            context.commit('setIsAuthenticated', true)
          }
        })
    },
    logout(context) {
      context.commit('setUser', {}),
        context.commit('setIsAuthenticated', false)
    }
  },
  modules: {
  }
})
