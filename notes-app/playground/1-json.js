
const fs = require('fs') 

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user  = JSON.parse(dataJSON) 

user.name = "virat"
user.age = 33

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)



// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)



// const book = {
//     title:'Ego is the Enemy',
//     author: 'Ryan holiday'
 
 
//  }
//  const bookJSON = JSON.stringify(book)
//  fs.writeFileSync('1-json.json',bookJSON)