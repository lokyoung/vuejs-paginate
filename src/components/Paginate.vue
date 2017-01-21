<template>
  <ul :class="containerClass">
    <li>
      <a @click="prevPage()">
        {{ prevText }}
      </a>
    </li>
    <li v-for="page in pages" :class="{ active: page.selected, disabled: page.disabled }">
      <a v-if="page.disabled">{{ page.content }}</a>
      <a v-else @click="handlePageSelected(page.index)">{{ page.content }}</a>
    </li>
    <li>
      <a @click="nextPage()">
        {{ nextText }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    pageCount: {
      type: Number,
      required: true
    },
    clickHandler: {
      type: Function,
      default: () => {}
    },
    pageRange: {
      type: Number,
      default: 3
    },
    marginPages: {
      type: Number,
      default: 1,
    },
    prevText: {
      type: String,
      default: 'Prev'
    },
    nextText: {
      type: String,
      default: 'Next'
    },
    containerClass: {
      type: String
    }
  },
  data () {
    return {
      selected: 0
    }
  },
  computed: {
    pages: function () {
      let items = {}
      if (this.pageCount <= this.pageRange) {
        for (let index = 0; index < this.pageCount; index++) {
          let page = {
            index: index,
            content: index + 1,
            selected: index === this.selected
          }
          items[index] = page
        }
      } else {
        let leftPart = this.pageRange / 2
        let rightPart = this.pageRange - leftPart

        if (this.selected < leftPart) {
          leftPart = this.selected
          rightPart = this.pageRange - leftPart
        } else if (this.selected > this.pageCount - this.pageRange / 2) {
          rightPart = this.pageCount - this.selected
          leftPart = this.pageRange - rightPart
        }

        for (let index = 0; index < this.pageCount; index++) {
          let page = {
            index: index,
            content: index + 1,
            selected: index === this.selected
          }

          if (index <= this.marginPages - 1 || index >= this.pageCount - this.marginPages) {
            items[index] = page
            continue
          }

          let breakView = {
            content: '...',
            disabled: true
          }

          if ((this.selected - leftPart) > this.marginPages && items[this.marginPages] !== breakView) {
            items[this.marginPages] = breakView
          }

          if ((this.selected + rightPart) < (this.pageCount - this.marginPages - 1) && items[this.pageCount - this.marginPages - 1] !== breakView) {
            items[this.pageCount - this.marginPages - 1] = breakView
          }

          let overCount = this.selected + rightPart - this.pageCount + 1

          if (overCount > 0 && index === this.selected - leftPart - overCount) {
            items[index] = page
          }

          if ((index >= this.selected - leftPart) && (index <= this.selected + rightPart)) {
            items[index] = page
            continue
          }
        }
      }
      return items
    }
  },
  methods: {
    handlePageSelected (selected) {
      if (this.selected === selected) return

      this.selected = selected

      this.clickHandler(this.selected + 1)
    },
    prevPage () {
      if (this.selected <= 0) return

      this.selected --

      this.clickHandler(this.selected + 1)
    },
    nextPage () {
      if (this.selected >= this.pageCount - 1) return

      this.selected ++

      this.clickHandler(this.selected + 1)
    }
  }
}
</script>
