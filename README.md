# handle-template

[![NPM version](https://img.shields.io/npm/v/handle-template.svg?style=flat)](https://www.npmjs.com/package/handle-template)
[![NPM downloads](http://img.shields.io/npm/dm/handle-template.svg?style=flat)](https://www.npmjs.com/package/handle-template)

## Usage
```javascript
import handleTemplate from 'handle-template'
const template = `
  <div>name: {{{name}}}, age: {{{age}}}</div>
  <div>sex: {{{sex}}}</div>
`;
const config = {
  name: "Senzz",
  age: '24',
  sex: "male"
}
const result = handleTemplate(template, config);
// <div>name: Senzz, age: 24</div>
// <div>sex: male</div>
```