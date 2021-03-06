import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'

Vue.use(Router)

const About = { template: '<div><h1>About...</h1></div>' }

export default new Router({
  routes: [
    {
      path: '/list',
      component: List
    },
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/about',
      component: About
    }
  ]
})
