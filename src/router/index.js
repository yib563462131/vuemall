import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/tabber/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: ()=>import('../views/home/Home.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/cart',
    name: 'cart',
    component: ()=>import('../views/cart/Cart.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: ()=>import('../views/category/Category.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: ()=>import('../views/profile/Profile.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
