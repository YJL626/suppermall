import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home'

const Category = () => import('views/category/Category')
const ShopCart = () => import('views/shopcart/ShopCart')
const Profile = () => import('views/profile/Profile')
const Details = () => import('views/details/Details')
Vue.use(VueRouter)

const routes = [
  {//default
    path: '/',
    redirect: '/home'
  },
  {//home
    path: '/home',
    component: Home
  },
  {//category
    path: '/category',
    component: Category
  },
  {//ShopCart
    path: '/shopcart',
    component: ShopCart
  },
  {//Profile
    path: '/profile',
    component: Profile
  },
  {//details
    path: '/details/:iid',
    component: Details
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
