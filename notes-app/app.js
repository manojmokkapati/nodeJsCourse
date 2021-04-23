const chalk = require('chalk')
const yargs = require('yargs')
const nodes = require('./notes.js')

const getNotes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

// creat add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler( ){
        console.log('adding the note!')
    }
})

//creat remove command
yargs.command({
    command: 'remove',
    describe:'Remove a note',
    handler: function (){
        console.log('Removing the note!')
    }

})
// creat list command
yargs.command({
    command: 'list',
    describe:'Listing your note',
    handler: function () {
        getNotes.list()
    }
})

//creat read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Title:'+argv.title)
    }


})
yargs.parse()


// add, remove ,read , list 
// console.log(yargs.argv)



// if(command === 'add') {
//     console.log('Adding note!')

// }







// const command = process.argv[2]


// const msg = getNotes()


// console.log(msg)

// const greenMsg = chalk.bold.blue.inverse('success!')
// console.log(greenMsg)


// console.log(process.argv[2])












// const test= require('./utils.js')
// const sum = test(8,7)
//  console.log(sum)



