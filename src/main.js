import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import store from './store'
import Maps from '@/components/Maps'
import ListView from '@/components/ListView'
import Sidebar from '@/components/Sidebar'



Vue.use(BootstrapVue)
Vue.config.productionTip = false


window.EventBus = new Vue ({
  data(){
    return {
      sanfrancisco: (37.78268, -122.41136)
    }
  }
});

Vue.component('Maps', Maps)
Vue.component('ListView', ListView)
Vue.component('Sidebar', Sidebar)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')