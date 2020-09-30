module.exports = (outputs, predictionOutputs, activationFn) =>
  outputs
    .map((x, i) => x - predictionOutputs[i])
    .map((x, i) => x * activationFn.derivative(predictionOutputs[i]))
