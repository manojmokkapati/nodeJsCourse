const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { title } = require('process')
const { query } = require('express')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views loction
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'manoj'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'this is some helpful text.',
        title: 'help',
        name: 'manoj'
    })
})

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app',
        name: 'manoj m'
    })
    // const stock= product.stock

})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'you most provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address

            })
        })

    })

})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'you most provide a search term'
        })

    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'manoj',
        errorMessage: 'Help artical are not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'manoj',
        errorMessage: 'page not found.'

    })
})


app.listen(3000, () => {
    console.log('server is up on port 3000.')
})

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

//app.com
//app.com/help
//app.com/about



// app.get('',(req,res) => {
//     res.send('<h1>welcome<h1>')

// })

// app.get('/help',(req,res) => {
//     res.send([{
//         name: 'manoj',
//         age : 23,
//         gender : 'male'
//     },
//     {name: 'riya',
//     age : 21,    
//     gender : 'female'

//     }
// ])
// })

// app.get('/about',(req,res) => {
//     res.send('<h1>About<h1>')
// })