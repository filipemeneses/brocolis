# brocolis

> single-neuron made in JS

## Install

```bash
yarn add brocolis
// npm i -S brocolis
```

## Usage

```js
const brocolis = require('brocolis')
const sigmoid = require('brocolis/lib/activationFunctions/sigmoid')

brocolis({
  activationFunction: sigmoid
})
  .train({
    input: [
      // && example
      [1, 1, 1],
      [1, 0, 1],
      [0, 1, 1],
      [0, 0, 1]
    ],
    output: [1, 0, 0, 0],
    interactions: 10000
  })
  .predict([[1, 1, 1]]) // [ ~0.98 ] 
```

