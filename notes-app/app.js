const chalk = require('chalk')

const getNotes = require('./nodes.js')

const msg = getNotes()


console.log(msg)

const greenMsg = chalk.bold.blue.inverse('success!')
console.log(greenMsg)













// const test= require('./utils.js')
// const sum = test(8,7)
//  console.log(sum)



