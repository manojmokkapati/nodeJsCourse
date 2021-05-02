const path = require('path')
const express = require('express')

const app = express()

// Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath= path.join(__dirname,'../templates')

//setup handlebars engine and views loction
app.set('view engine', 'hbs')
app.set('views',viewsPath)

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
        helpText: 'this is some helpful text.'
    })
})

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app',
        name: 'manoj m'
    })

})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'its raining',
        location: 'sri kalahasthi'
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