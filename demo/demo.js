import Vue from 'vue'
import Paginate from 'vuejs-paginate'
import App from './App'

Vue.use(Paginate)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
