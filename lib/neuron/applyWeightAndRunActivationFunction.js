const multiplyArraysNumbersAndSumResults = require('../math/multiplyArraysNumbersAndSumResults')

module.exports = (inputs, activationFn, weight) => inputs.map(
  multiplyArraysNumbersAndSumResults(weight)
).map(activationFn)
