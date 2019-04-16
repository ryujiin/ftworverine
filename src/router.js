import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/app',
      name: 'home',
      component: Dashboard,
      redirect: { name: 'dashboard' },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('./views/DashPage.vue')
        },
        {
          path: 'inventario/productos',
          name: 'InveProductos',
          component: () => import('./views/inventario/Productos.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue')
    }
  ]
})
