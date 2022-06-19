const _= require('lodash')

const a = [1,2,3,4,5]
const b = [2,4,6,7,8]

const diff = _.difference(a, b)
const diff1 = _.difference(b, a)

console.log(`os números que tem em A e não tem em B são ${diff}`)
console.log(`os números que tem em B e não tem em A são ${diff1}`)