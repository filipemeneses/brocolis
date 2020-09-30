const generateRandomNumbers = require('./math/generateRandomNumbers')
const train = require('./neuron/train')
const predict = require('./neuron/predict')
const sigmoid = require('./activationFunctions/sigmoid')

module.exports = ({
  activationFunction = sigmoid
} = {
  activationFunction: sigmoid
}) => {
  let trainedWeight = null

  return {
    train ({
      input: trainingInputs,
      output: trainingOutputs,
      interactions = 1,
      weight
    }) {
      trainedWeight = weight || trainedWeight || generateRandomNumbers(trainingInputs[0].length)
      while (interactions > 0 && interactions--) {
        trainedWeight = train(trainingInputs, trainingOutputs, activationFunction, trainedWeight)
      }
      return this
    },
    predict (inputs) {
      return predict(inputs, trainedWeight, activationFunction)
    },
    getWeights () {
      return trainedWeight
    }
  }
}
