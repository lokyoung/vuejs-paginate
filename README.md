# vuejs-paginate
[![NPM](https://nodei.co/npm/vuejs-paginate.png)](https://nodei.co/npm/vuejs-paginate/)

A Vue.js component to make pagination. Inspried by [react-paginate](https://github.com/AdeleD/react-paginate).

**Note**: Require Vue 2.x.

## Installation

```
npm install vuejs-paginate --save
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
```js
<paginate
  :pageCount="20"
  :clickHandler="clickHandler"
  prevText="Prev"
  nextText="Next"
  containerClass="pagination"
  >
</paginate>
```

## Props
| Name | Type | Description |
| --- | --- | --- |
| `pageCount` | `Number` | Total count of pages. **required** |
| `pageRange` | `Number` | Range of pages which displayed. **default: 3** |
| `prevText` | `String` | Text for the previous button. **default: Prev**  |
| `nextText` | `String` | Text for the next button. **default: Next**  |
| `clickHandler` | `Function` | The method to call when page clciked. Use clciked page number as parameter. |
| `containerClass` | `String` | CSS class for the layout. |
