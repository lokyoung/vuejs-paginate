import Vue from 'vue'
import Paginate from 'vuejs-paginate'
import App from './App'

Vue.component('paginate', Paginate)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
