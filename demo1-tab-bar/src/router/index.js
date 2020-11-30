import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const routes  = [
  {path:'/',redirect: '/home'},
  {path:'/home',component:()=>import('../views/home/Home')},
  {path:'/category',component:()=>import('../views/category/Category')},
  {path:'/profile',component:()=>import('../views/profile/Profile')},
  {path:'/shopcart',component:()=>import('../views/shopcart/ShopCart')},
  {path:'*',component:()=>import('../components/404notFound/404')}
]
const router = new VueRouter({
  mode:'history',
  routes
})
export default router