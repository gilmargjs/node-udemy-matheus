const _ = require('lodash')
const chalk = require('chalk')

const a = [1,2,3,4,5]
const b = [2,4,6,7,8]

const diff =  _.difference(a, b)
const diff1 =  _.difference(b, a)

console.log(chalk.bgGreen.red.bold(diff))
console.log(chalk.blue.bgRed.bold(diff1))