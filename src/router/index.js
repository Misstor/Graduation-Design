import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Singer from '@/components/Singer/Singer'
import Recommend from '@/components/Recommend/Recommend'
import Rank from '@/components/Rank/Rank'
import Search from '@/components/Search/Search'
import Tab from '@/components/tab/tab'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Header
    },
    {
      path: '/Singer',
      component: Singer
    },
    {
      path: '/Rank',
      component: Rank
    },
    {
      path: '/Search',
      component: Search
    },
    {
      path: '/Recommend',
      component: Recommend
    },
    {
      path: '/tab',
      component: Tab
    }
  ]
})
