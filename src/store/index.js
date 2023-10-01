import { createStore } from 'vuex'
import { api } from '@/services/api.js';

export default createStore({
  state: {
    user: {
      name: 'John Doe',
      age: 26
    },
    users: []
  },
  getters: {
  },
  mutations: {
    createUser(state, payload) {
      state.users.push(payload)
    },
    setUser(state, payload) {
      state.user = payload
    },
    setUsers(state, payload) {
      state.users = payload
    },
    deleteUser(state, payload) {
      state.users = state.users.filter(user => user.id !== payload)
    }
  },
  actions: {
    createUser(context, payload) {
      context.commit('createUser', payload)
    },
    getUsers(context) {
      api.get('/users')
        .then((response) => {
          context.commit('setUsers', response.data)
        })
    },
    getUser(context, payload) {
      return api.get(`/users/${payload}`);
    },
    deleteUser(context, payload) {
      context.commit('deleteUser', payload)
      return true;
    }
  },
  modules: {
  }
})
