/*
 * @作者: Edwin Yeung
 * @Date: 2020-02-14 23:16:25
 * @修改人: Edwin Yeung
 * @LastEditTime: 2020-03-12 23:10:47
 * @描述: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入路由和Vuex
import router from './router/index.js'   
import store from './store/index.js'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  components:{App},
  // template:'<App/>',
  render:h=>h(App),
  router,
  store
})

