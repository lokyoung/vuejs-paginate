import Vue from 'vue'
import Paginate from 'src/components/Paginate.vue'

describe('Paginate', () => {
  const Component = Vue.extend(Paginate)
  function initComponent() {
    return new Component({
      propsData: {
        pageCount: 10
      }
    }).$mount()
  }

  describe('Simple Cases', () => {
    it('success', () => {
      const vm = initComponent()
      expect(vm.$el.querySelector("li:first-child a").textContent).to.equal("Prev")
      expect(vm.$el.querySelector("li:last-child a").textContent).to.equal("Next")
      expect(vm.$el.querySelector(".active a").textContent).to.equal("1")
    })

    it('next and prev button event right', () => {
      const vm = initComponent()
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

    it('prev button when first page', () => {
      const vm = initComponent()
      const prevButton = vm.$el.querySelector("li:first-child a")
      prevButton.click()

      Vue.nextTick(() => {
        expect(vm.$el.querySelector(".active a").textContent).to.equal("1")
      })
    })

    it('click page element', () => {
      const vm = initComponent()
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
          initialPage: 1
        }
      }).$mount()
      expect(vm.$el.querySelector(".active a").textContent).to.equal("2")
    })

    it('set forcePage success', () => {
      const vm = new Component({
        propsData: {
          pageCount: 10,
          initialPage: 0,
          forcePage: 5
        }
      }).$mount()

      const nextButton = vm.$el.querySelector("li:last-child a")
      nextButton.click()
      Vue.nextTick(() => {
        expect(vm.$el.querySelector(".active a").textContent).to.equal("6")

        const prevButton = vm.$el.querySelector("li:first-child a")
        prevButton.click()

        Vue.nextTick(() => {
          expect(vm.$el.querySelector(".active a").textContent).to.equal("6")
        })
      })
    })

    it('set forcePage in initialPage', () => {
      const vm = new Component({
        propsData: {
          pageCount: 10,
          initialPage: 5,
          forcePage: 5
        }
      }).$mount()

      expect(vm.$el.querySelector(".active a").textContent).to.equal("6")
      const nextButton = vm.$el.querySelector("li:last-child a")
      nextButton.click()
      Vue.nextTick(() => {
        expect(vm.$el.querySelector(".active a").textContent).to.equal("6")
      })
    })
  })

  describe('page range tests', () => {
    it('page count not more than range', () => {
      const vm = new Component({
        propsData: {
          pageCount: 5,
          pageRange: 5
        }
      }).$mount()
      expect(vm.$el.querySelectorAll("li a").length).to.equal(7)
    })

    it('only has breakView in left', () => {
      const vm = new Component({
        propsData: {
          pageCount: 10,
          initialPage: 9
        }
      }).$mount()
      expect(vm.$el.querySelector(`li:nth-child(3) a`).textContent).to.equal('...')
      expect(vm.$el.querySelector(`li:nth-child(4) a`).textContent).to.equal('7')
    })
  })

  describe('enable first and last button', () => {
    it('Show fist and last button', () => {
      const vm = new Component({
        propsData: {
          pageCount: 10,
          initialPage: 1,
          firstLastButton: true
        }
      }).$mount()
      const firstButton = vm.$el.querySelector("li:first-child a")
      const lastButton = vm.$el.querySelector("li:last-child a")
      const activeItem = vm.$el.querySelector(".active a")
      expect(firstButton.textContent).to.equal("First")
      expect(lastButton.textContent).to.equal("Last")
      expect(activeItem.textContent).to.equal("2")

      firstButton.click()
      Vue.nextTick(() => {
        expect(activeItem.textContent).to.equal("1")

        lastButton.click()
        Vue.nextTick(() => {
          expect(activeItem.textContent).to.equal("10")
        })
      })
    })

    it('Show fist and last button when no li surround', () => {
      const vm = new Component({
        propsData: {
          pageCount: 10,
          initialPage: 1,
          noLiSurround: true,
          firstLastButton: true
        }
      }).$mount()
      const firstButton = vm.$el.querySelector("a:first-child")
      const lastButton = vm.$el.querySelector("a:last-child")
      const activeItem = vm.$el.querySelector("a.active")
      expect(firstButton.textContent).to.equal("First")
      expect(lastButton.textContent).to.equal("Last")
      expect(activeItem.textContent).to.equal("2")

      // firstButton.click()
      // Vue.nextTick(() => {
      //   expect(activeItem.textContent).to.equal("1")
      //
      //   lastButton.click()
      //   Vue.nextTick(() => {
      //     expect(activeItem.textContent).to.equal("10")
      //   })
      // })
    })
  })
})
