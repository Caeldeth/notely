//need filesystem abilities
const fs = require('fs');
//need ability to resolve path
const path = require('path');

const newNote = (note, noteArray) => {
    // appends new note to array
    noteArray.push(note)

    // saves notes array to db.json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    );  
};

const findByIndex = (id, noteArray) => {
    //matches note id of saved note
    const match = noteArray.filter(note => note.id === id[0]);
    //sends match back to noteRoutes
    return match;
};

const delNote = (note, noteArray) => {
    //remove selected note from note array
    const selected = noteArray.indexOf(note);
    noteArray.splice(index, 1);

    // write to db with new array
    fs.writeFileSync(
       path.join(__dirname, '../db/db.json'),
       JSON.stringify({ notes: notesArray }, null, 2)
    );
};

const editNote = (editNote, noteArray) => {
    // fetch index of note to be edited
    const edited = noteArray.findIndex(note => note.id === editNote.id);

    // remove old note 
    noteArray.splice(edited, 1);
    // add updated note
    noteArray.splice(edited, 0, editNote);
    
    // rewrite db with new array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    );
};

module.exports = { newNote, findByIndex, delNote, editNote };
