// const add = require('./utils.js') // importing the file named utils.js
const notes = require('./notes.js') // importing the file named note.js
const yargs  = require('yargs') //importing chalk library module

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

