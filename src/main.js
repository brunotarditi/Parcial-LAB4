import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.filter('currency', function(value){
  let val = (value/1).toFixed(2).replace('.', ',')
  return "$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
