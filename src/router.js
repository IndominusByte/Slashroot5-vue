import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/login'},
  {path:'/login',component:Login},
  {path:'/home',component:Home}
]

export default new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(){
    return {x: 0, y: 0};
  },
})
