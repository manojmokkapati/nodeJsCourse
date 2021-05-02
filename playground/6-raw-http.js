const https= require('https')
const url ='https://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=45,-75&%20units=f'


const request = https.request(url,(response) => {

    let data = ''

    response.on('data',(chunk) =>{
        data= data + chunk.toString() 
    })

    response.on('end',() =>{
        const body = JSON.parse(data)
        console.log(body)

    })

    response.on('error',(error)=> {
        console.log('An error', error)
    })
})
 request.end()