<template>
  <ul :class="containerClass" v-if="!noLiSurround">
    <li :class="[prevClass, { disabled: firstPageSelected() }]">
      <a @click="prevPage()" @keyup.enter="prevPage()" :class="prevLinkClass" tabindex="0">{{ prevText }}</a>
    </li>
    <li v-for="page in pages" :class="[pageClass, { active: page.selected, disabled: page.disabled }]">
      <a v-if="page.disabled" :class="pageLinkClass" tabindex="0">{{ page.content }}</a>
      <a v-else @click="handlePageSelected(page.index)" @keyup.enter="handlePageSelected(page.index)" :class="pageLinkClass" tabindex="0">{{ page.content }}</a>
    </li>
    <li :class="[nextClass, { disabled: lastPageSelected() }]">
      <a @click="nextPage()" @keyup.enter="nextPage()" :class="nextLinkClass" tabindex="0">{{ nextText }}</a>
    </li>
  </ul>

  <div :class="containerClass" v-else>
    <a @click="prevPage()" @keyup.enter="prevPage()" :class="[prevLinkClass, { disabled: firstPageSelected() }]" tabindex="0">{{ prevText }}</a>
    <template v-for="page in pages">
      <a v-if="page.disabled" :class="[pageLinkClass, { active: page.selected, disabled: page.disabled }]" tabindex="0">{{ page.content }}</a>
      <a v-else @click="handlePageSelected(page.index)" @keyup.enter="handlePageSelected(page.index)" :class="[pageLinkClass, { active: page.selected, disabled: page.disabled }]" tabindex="0">
        {{ page.content }}
      </a>
    </template>
    <a @click="nextPage()" @keyup.enter="nextPage()" :class="[nextLinkClass, { disabled: lastPageSelected() }]" tabindex="0">{{ nextText }}</a>
  </div>
</template>

<script>
export default {
  props: {
    pageCount: {
      type: Number,
      required: true
    },
    initialPage: {
      type: Number,
      default: 0
    },
    forcePage: {
      type: Number
    },
    clickHandler: {
      type: Function,
      default: () => { }
    },
    pageRange: {
      type: Number,
      default: 3
    },
    marginPages: {
      type: Number,
      default: 1
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
    },
    pageClass: {
      type: String
    },
    pageLinkClass: {
      type: String
    },
    prevClass: {
      type: String
    },
    prevLinkClass: {
      type: String
    },
    nextClass: {
      type: String
    },
    nextLinkClass: {
      type: String
    },
    noLiSurround: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selected: this.initialPage
    }
  },
  beforeUpdate() {
    if (this.forcePage === undefined) return
    if (this.forcePage !== this.selected) {
      this.selected = this.forcePage
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

        // items logic extracted into this function
        let mapItems = index => {
          let page = {
            index: index,
            content: index + 1,
            selected: index === this.selected
          }

          if (index <= this.marginPages - 1 || index >= this.pageCount - this.marginPages) {
            items[index] = page
            return
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
            return
          }
        }

        // 1st - loop thru low end of margin pages
        for (let i = 0; i < this.marginPages; i++) {
          mapItems(i);
        }

        // 2nd - loop thru high end of margin pages
        for (let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--) {
          mapItems(i);
        }

        // 3rd - loop thru selected range
        let selectedRangeLow = 0;
        if (this.selected - this.pageRange > 0) {
          selectedRangeLow = this.selected - this.pageRange;
        }

        let selectedRangeHigh = this.pageCount;
        if (this.selected + this.pageRange < this.pageCount) {
          selectedRangeHigh = this.selected + this.pageRange;
        }

        for (let i = selectedRangeLow; i < selectedRangeHigh; i++) {
          mapItems(i);
        }

      }
      return items
    }
  },
  methods: {
    handlePageSelected(selected) {
      if (this.selected === selected) return

      this.selected = selected

      this.clickHandler(this.selected + 1)
    },
    prevPage() {
      if (this.selected <= 0) return

      this.selected--

      this.clickHandler(this.selected + 1)
    },
    nextPage() {
      if (this.selected >= this.pageCount - 1) return

      this.selected++

      this.clickHandler(this.selected + 1)
    },
    firstPageSelected() {
      return this.selected === 0
    },
    lastPageSelected() {
      return (this.selected === this.pageCount - 1) || (this.pageCount === 0)
    }
  }
}
</script>

<style lang="css" scoped>
a {
  cursor: pointer;
}
</style>
