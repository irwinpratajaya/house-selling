import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import HouseDetail from '@/components/HouseDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/:slug',
      name: 'HouseDetail',
      component: HouseDetail
    }
  ]
})
