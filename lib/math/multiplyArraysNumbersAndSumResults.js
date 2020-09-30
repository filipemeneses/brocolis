const sum = require('./sum')

// Given
// a = [1,2]
// b = [3,4]
// return 1 * 3 + 2 * 4
module.exports = b => (a) => {
  if (a.length !== b.length) throw new Error(`diff array size (${a.length} ${b.length})`)
  return b.map((x, i) => a[i] * x).reduce(sum)
}
