const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }else{
        console.log(chalk.red.inverse('Note title taken!')) 
    }
 
}

//Creating a removeNote
const removeNote = (title) => {
   // console.log(title)
   const notes = loadNotes() //loading the note
   const notesTokeep  = notes.filter((note) =>  note.title !== title)

   if(notes.length > notesTokeep.length){
       console.log(chalk.green.inverse('Note removed Successfully!  '))
       saveNotes(notesTokeep)
   }else{
        console.log(chalk.red.inverse('No Note found !!!'))
   }  
}


//Listing all the notes from notes.json file
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note)=> {
        console.log(note.title + " = " + note.body)
    })
}

//Reading the notes from notes.json file
const readNotes = (title) => {
    const notes = loadNotes() //loading the note
    const note = notes.find((note) => note.title === title) //searching the note by title

    if(note){
        console.log(chalk.inverse.bold(note.title) + " = " + note.body)
    }else{
        console.log(chalk.red.inverse('Note not Found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return [] //return empty arr
    }
}

module.exports ={
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
} 