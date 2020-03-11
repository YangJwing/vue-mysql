// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'    //引入路由
import VueResource from 'vue-resource'

Vue.use(VueRouter)  //中间件，使用路由
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  template:'<App/>',
  components:{App}
})