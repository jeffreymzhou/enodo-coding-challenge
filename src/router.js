import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Parse from './views/Parse.vue'
import MapsTest from './views/MapsTest.vue'
import FilterTest from './views/FilterTest.vue'
import PopulateMap from'./views/PopulateMap.vue'
import ColorGradient from'./views/ColorGradient.vue'
import FullMap from './views/FullMap.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/parse',
      name: 'parse',
      component: Parse
    },
    {
      path: '/mapstest',
      name: 'mapstest',
      component: MapsTest
    },
    {
      path: '/filtertest',
      name: 'filtertest',
      component: FilterTest
    },
    {
      path: '/popmap',
      name: 'popmap',
      component: PopulateMap
    },
    {
      path: '/colorgradient',
      name: 'colorgradient',
      component: ColorGradient
    },
    {
      path: '/fullmap',
      name: 'fullmap',
      component: FullMap
    }
  ]
})
