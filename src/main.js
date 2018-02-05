// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'
import rate from './components/rate'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template:'<rate :grade="3"/>',
  // router,
  components: {rate},
  // template: '<App/>'
})
