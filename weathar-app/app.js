const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address) {
    console.log('please provide an address')
}else {
    geocode(address, (error,{latitude,longitude,location} = {}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude,longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
    

}
// console.log(process.argv)


// console.log('starting')

// setTimeout(() => {
//     console.log('2 seconds Timer') 

//  },  2000)


//  setTimeout(() => {
//     console.log('0 seconds Timer') 

//  }, 0)

//  console.log('stopping') 

// const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'
// request({url:url, json:true},(error,response)=> {
//     console.log(response)

// }