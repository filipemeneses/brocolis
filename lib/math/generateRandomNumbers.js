const getRandomNumber = require('./getRandomNumber')

module.exports = (n) => Array(...Array(n)).map(getRandomNumber)
