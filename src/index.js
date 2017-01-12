import Paginate from './components/Paginate'

const vPaginate = {}

vPaginate.install = (Vue) => {
  Vue.component('paginate', Paginate)
}

export default vPaginate
