// const add = require('./utils.js') // importing the file named utils.js
const notes = require('./notes.js') // importing the file named note.js
const validator = require('validator') //importing validator library module
const chalk = require('chalk') //importing chalk library module
const yargs  = require('yargs') //importing chalk library module


// const sum = add(4, -2)
// console.log(sum);

// const msg = getNotes() 

// console.log(msg);

// // Use of validator library
// console.log("Is Email = " , validator.isEmail('rutushah@gmail.com'))
// console.log("Is URL = " , validator.isURL('https://mead.io'))

// // use of chalk library

// const greenMsg = chalk.green.bold.inverse("Success!")
// const red = chalk.blue.bold.inverse("Error!")

// console.log(greenMsg) 
// console.log(red) 

// console.log(process.argv[2]) 


// const command = process.argv[2]

// console.log(process.argv)

// if(command === 'add'){
//     console.log('Adding note!')
// }else if(command === 'remove'){
//     console.log('Removing note!')
// }

//yargs 

//Customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title : {
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//adding a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//adding a list command
yargs.command({
    command: 'list',
    describe: 'List command',
    handler(){
        notes.listNotes()
    }
})

//adding a read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title', 
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})
 
yargs.parse()

//console.log(yargs.argv)


//Challenge Setup command option and function

/**
 * 
 * 1. setup the remove command to take a required "--title option"
 * 2. Create and export a removeNote function from notes.js
 * 3. Call removeNote in remove command handler
 * 4. Have removeNote log the title of the note to be removed
 * 5. Test your work using : node app.js remove --title="sometitle"
 * 
 */


