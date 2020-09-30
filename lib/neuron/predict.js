const multiplyArraysNumbersAndSumResults = require('../math/multiplyArraysNumbersAndSumResults')

module.exports = (inputs, weights, activationFn) => inputs.map(multiplyArraysNumbersAndSumResults(weights)).map(activationFn)
