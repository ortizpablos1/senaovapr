import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
  
{
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Inicio.vue')
      },
      {
        path: '/tiposTuberia',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/TiposTuberia1.vue')
      },
      {
        path: '/ejemplos',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Ejemplos2.vue')
      },
      {
        path: '/plantillas3',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Plantillas3.vue')
      },
      {
        path: '/plantillas4',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Plantillas4.vue')
      },
      {
        path: '/creaciontuberia5',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Creaciontuberia5.vue')
      },
      {
        path: '/edicionrutas6',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Edicionrutas6.vue')
      },
      {
        path: '/estilos7',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Estilos7.vue')
      },
      {
        path: '/profundiestilos8',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Profundiestilos8.vue')
      },
      {
        path: '/autorutas9',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Autorutas9.vue')
      },
      {
        path: '/rutasmanual10',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Rutasmanual10.vue')
      },
    ]
  }
]



const router = new VueRouter({
  routes
})

export default router
