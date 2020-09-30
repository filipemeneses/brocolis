const sigmoid = x => 1 / (1 + Math.exp(-x))

sigmoid.derivative = x => x * (1 - x)

module.exports = sigmoid
