# Gridorous

> CSS grid exposed as a function to be used in CSS Modules

## Brief
Gridorous provides a set of functions based on the [Flexboxgrid.com](http://flexboxgrid.com/)
than can be used to generate CSS-in-JS objects to be parsed by [glamor](https://github.com/threepointone/glamor)
and possibly other libraries.

## Example

```JavaScript

const {makeRow, makeColXs} = require('gridorous');
const {css} = require('glamor');

module.exports = function () {
  return (
    <div className={css(makeRow())}>
      <div className={css(makeColXs(6))}>
        Left side
      </div>
      <div className={css(makeColXs(6))}>
        Right side
      </div>
    </div>
  )
}

```
