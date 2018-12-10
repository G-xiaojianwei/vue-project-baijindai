import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Prodoct from '@/components/Prodoct.vue'
import Find from '@/components/Find.vue'
import ProMenuLeft from '@/components/ProMenuLeft.vue'
import ProMenuRight from '@/components/ProMenuRight.vue'
import Detail from '@/components/Detail.vue'
import Detail2 from '@/components/Detail2.vue'
import User from '@/components/User.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/prodoct',
      component: Prodoct,
      children:[
        {
          path: '/prodoct/promenuleft',
          component: ProMenuLeft
        },
        {
          path: '/prodoct/promenuright',
          component: ProMenuRight
        },
        {
        path:'/prodoct',
        redirect:"/prodoct/promenuleft"
      }

      ]
    },
    {
      path: '/find',
      component: Find
    },
     {
      path: '/user',
      component: User
    },
    {
      path: '/detail/:mid',
      component: Detail
    },
    {
      path: '/detail2/:mid',
      component: Detail2
    },
    {
    	path:'*',
    	redirect:"/home"
    }
  ]
})
