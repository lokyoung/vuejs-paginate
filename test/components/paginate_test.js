import Vue from 'vue'
import Paginate from '../../src/components/Paginate.vue'

describe('Paginate', () => {
  const Component = Vue.extend(Paginate)

  it('setup default component', () => {
    const vm = new Component({
      propsData: {
        pageCount: 10
      }
    })
    expect(vm.pageCount).to.equal(10)
    expect(vm.pageRange).to.equal(3)
    expect(vm.selected).to.equal(0)
  })
})
