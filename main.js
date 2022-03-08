import App from './App'

import '.env.js'
import store, {retriveData} from './store'
import {router,RouterMount} from './router.js'
import uView from 'uview-ui';

 // console.log(ROUTES)
// #ifndef VUE3
import Vue from 'vue'
Vue.use(router) 

Vue.use(uView);

Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
		store
})
retriveData()
// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount()
// #endif

// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif