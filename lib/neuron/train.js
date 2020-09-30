const multiplyArraysNumbersAndSumResults = require('../math/multiplyArraysNumbersAndSumResults')
const transpose = require('../math/transpose')
const predict = require('./predict')
const computePredictionError = require('./computePredictionError')
const sumWeight = require('./sumWeight')

module.exports = (trainingInputs, trainingOutputs, activationFn, weight) => weight.map(
  sumWeight(
    transpose(trainingInputs).map(
      multiplyArraysNumbersAndSumResults(
        computePredictionError(
          trainingOutputs,
          predict(trainingInputs, weight, activationFn),
          activationFn
        )
      )
    )
  )
)
