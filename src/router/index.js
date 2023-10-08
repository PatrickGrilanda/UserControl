import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/LoginView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/users/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "create" */ '../views/users/CreateView.vue')
  },
  {
    path: '/users/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/users/DetailView.vue')
  },
  {
    path: '/users/:id/edit',
    name: 'edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/users/EditView.vue')
  },
  {
    path: '/users/',
    name: 'list',
    component: () => import(/* webpackChunkName: "list" */ '../views/users/ListView.vue'),
    children: [
      {
        path: ':id/view',
        name: 'view',
        component: () => import(/* webpackChunkName: "view" */ '../views/users/DetailView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
