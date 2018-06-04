const styles = require('flexboxgrid');
const postcss = require('postcss');
const postcssJs = require('postcss-js');

const processed = postcssJs.objectify(postcss.parse(styles));

function getStyleFromClassName (className) {
  return processed[`.${className}`];
}

function createFunctionName (property) {
  const tokens = property.split('-');
  return tokens
    .map(function (token) {
      return token.charAt(0).toUpperCase() + token.slice(1)
    })
    .join('');
}

function acceptingPossitionFactory (property) {
  return function (position) {
    return getStyleFromClassName(`${property}-${position}`);
  }
}

function acceptingWidthFactory (property) {
  return function (width) {
    return getStyleFromClassName(`${property}-${width}`)
  }
}

const acceptingPossitionProperties = [
  'start',
  'center',
  'end',
  'top',
  'middle',
  'bottom',
  'around',
  'between',
]

const acceptingWidthProperties = [
  'col-xs',
  'col-xs-offset',
  'col-sm',
  'col-sm-offset',
  'col-md',
  'col-md-offset',
  'col-lg',
  'col-lg-offset',
]

function makeRow () {
  return getStyleFromClassName(`row`);
}

function makeContainer () {
  return getStyleFromClassName(`container`);
}

function makeContainerFluid () {
  return getStyleFromClassName(`container-fluid`);
}

const exportedObject = {};

acceptingPossitionProperties.forEach(function (property) {
  exportedObject[property] = acceptingPossitionFactory(property);
})

acceptingWidthProperties.forEach(function (property) {
  exportedObject[`make${createFunctionName(property)}`] = acceptingWidthFactory(property);
})

module.exports = {
  ...exportedObject,
  makeRow,
  makeContainer,
  makeContainerFluid,
}
