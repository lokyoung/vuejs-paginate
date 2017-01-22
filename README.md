# vuejs-paginate
[![NPM](https://nodei.co/npm/vuejs-paginate.png)](https://nodei.co/npm/vuejs-paginate/)

A Vue.js component to make pagination. Inspired by [react-paginate](https://github.com/AdeleD/react-paginate).

Easy to use by providng simple api. And you can customize the style of this component by css.

<img src="https://raw.githubusercontent.com/lokyoung/vuejs-paginate/master/img/pagination-show.gif" width="550" />


## Installation

```js
$ npm install vuejs-paginate --save
```

- ES5
```js
var Paginate = require('vuejs-paginate')
Vue.use(Paginate)
```

- ES6
```js
import Paginate from 'vuejs-paginate'
Vue.use(Paginate)
```

## Usage

```html
<paginate
  :pageCount="20"
  :clickHandler="functionName"
  :prevText="'Prev'"
  :nextText="'Next'"
  :containerClass="'className'">
</paginate>
```

Example
```html
<template>
  <paginate
    :pageCount="20"
    :pageRange="3"
    :marginPages="2"
    :clickHandler="clickCallback"
    :prevText="'Prev'"
    :nextText="'Next'"
    :containerClass="'pagination'">
  </paginate>
</template>

<script>
export default {
  methods: {
    clickCallback (pageNum) => {
      console.log(pageNum)
    }
  }
}
</script>

<style lang="css">
.pagination {
}
</style>
```

## Props
| Name | Type | Description |
| --- | --- | --- |
| `pageCount` | `Number` | Total count of pages. **required** |
| `pageRange` | `Number` | Range of pages which displayed. **default: 3** |
| `marginPages` | `Number` | The number of displayed pages for marings. **default: 1** |
| `prevText` | `String` | Text for the previous button. **default: Prev**  |
| `nextText` | `String` | Text for the next button. **default: Next**  |
| `clickHandler` | `Function` | The method to call when page clciked. Use clciked page number as parameter. |
| `containerClass` | `String` | CSS class for the layout. |
