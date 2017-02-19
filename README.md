# vuejs-paginate
[![NPM](https://nodei.co/npm/vuejs-paginate.png)](https://nodei.co/npm/vuejs-paginate/)
[![Build Status](https://travis-ci.org/lokyoung/vuejs-paginate.svg?branch=master)](https://travis-ci.org/lokyoung/vuejs-paginate)

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
  :prevText="'Prev'"
  :nextText="'Next'"
  :containerClass="'className'"
  @change="functionName">
</paginate>
```

Example
```html
<template>
  <paginate
    :pageCount="20"
    :pageRange="3"
    :marginPages="2"
    :prevText="'Prev'"
    :nextText="'Next'"
    :containerClass="'pagination'"
    :pageClass="'page-item'"
    @change="functionName">
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
.page-item {
}
</style>
```

## Props
| Name | Type | Description |
| --- | --- | --- |
| `pageCount` | `Number` | Total count of pages. **required** |
| `pageRange` | `Number` | Range of pages which displayed. **default: 3** |
| `marginPages` | `Number` | The number of displayed pages for margins. **default: 1** |
| `prevText` | `String` | Text for the previous button. **default: «**  |
| `nextText` | `String` | Text for the next button. **default: »**  |
| `initialPage` | `Number` | The initial page which selected. **default: 1** |
| `change` | `Function` | The method to call when page clicked. Use clicked page number as parameter. |
| `containerClass` | `String` | CSS class name for the layout. **default: pagination** |
| `pageClass` | `String` | CSS class name for tag `li` of each page element. **default: page-item** |
| `pageLinkClass` | `String` | CSS class name for tag `a` of each page element. **default: page-link** |
| `prevClass` | `String` | CSS class name for tag `li` of `previous` element. **default: page-item** |
| `prevLinkClass` | `String` | CSS class name for tag `a` of `previous` element. **default: page-link** |
| `nextClass` | `String` | CSS class name for tag `li` of `next` element. **default: page-item** |
| `nextLinkClass` | `String` | CSS class name for tag `a` of `next` element. **default: page-link** |

## Demo
You can see the demo for quickly understand how to use this package.

```sh
$ git clone git@github.com:lokyoung/vuejs-paginate.git
$ cd vuejs-paginate
$ npm install
$ npm run demo
```

Check the code from `./demo/index.html` and `./demo/App.vue`.
