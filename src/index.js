import Paginate from './components/Paginate'

const vuejsPaginate = {}

vuejsPaginate.install = (Vue) => {
  Vue.component('paginate', Paginate)
}

module.exports = exports.default = vuejsPaginate
