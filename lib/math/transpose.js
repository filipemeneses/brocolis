// Given
// a = [[1,2,3],[4,5,6]]
// return [[1,4],[2,5],[3,6]]
module.exports = (m) => m[0].map((x, i) => m.map(x => x[i]))
