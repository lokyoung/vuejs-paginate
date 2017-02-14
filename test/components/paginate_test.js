import Vue from 'vue'
import Paginate from '../../src/components/Paginate.vue'

describe('Paginate', () => {
  const Component = Vue.extend(Paginate)

  it('success', () => {
    const vm = new Component({
      propsData: {
        pageCount: 10
      }
    }).$mount()
    expect(vm.$el.querySelector("li:first-child a").textContent).to.equal("Prev")
    expect(vm.$el.querySelector("li:last-child a").textContent).to.equal("Next")
    expect(vm.$el.querySelector(".active a").textContent).to.equal("1")
  })

  it('next and prev button event right', () => {
    const vm = new Component({
      propsData: {
        pageCount: 10
      }
    }).$mount()
    const nextButton = vm.$el.querySelector("li:last-child a")
    nextButton.click()

    Vue.nextTick(() => {
      expect(vm.$el.querySelector(".active a").textContent).to.equal("2")

      const prevButton = vm.$el.querySelector("li:first-child a")
      prevButton.click()

      Vue.nextTick(() => {
        expect(vm.$el.querySelector(".active a").textContent).to.equal("1")
      })
    })
  })

  it('click page element', () => {
    const vm = new Component({
      propsData: {
        pageCount: 10
      }
    }).$mount()
    const pageItem = vm.$el.querySelector('li:nth-child(3) a')
    pageItem.click()
    Vue.nextTick(() => {
      expect(vm.$el.querySelector(".active a").textContent).to.equal("2")
    })
  })

  it('set initial page success', () => {
    const vm = new Component({
      propsData: {
        pageCount: 10,
        initialPage: 2
      }
    }).$mount()
    expect(vm.$el.querySelector(".active a").textContent).to.equal("2")
  })
})
