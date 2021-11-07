//need filesystem abilities
const fs = require('fs');
//need ability to resolve path
const path = require('path');

const newNote = (body, notesArray) => {
    // appends new note to array
    const note = body;
    notesArray.push(note)

    // saves notes array to db.json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );  

    return note;
};

const findByIndex = (id, notesArray) => {
    //matches note id of saved note
    const match = notesArray.filter(note => note.id === id[0]);
    //sends match back to noteRoutes
    return match;
};

const delNote = (note, notesArray) => {
    //remove selected note from note array
    const selected = notesArray.indexOf(note);
    notesArray.splice(selected, 1);

    // write to db with new array
    fs.writeFileSync(
       path.join(__dirname, '../db/db.json'),
       JSON.stringify({ notes: notesArray }, null, 2)
    );
};

const editNote = (editNote, notesArray) => {
    // fetch index of note to be edited
    const edited = notesArray.findIndex(note => note.id === editNote.id);

    // remove old note 
    notesArray.splice(edited, 1);
    // add updated note
    notesArray.splice(edited, 0, editNote);
    
    // rewrite db with new array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};

// create mostly random id
function createIndex() {
    // thanks to jsmates.com/blog/generating-simple-unique-identifier-using-javascript !
    const dateString = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2);
    return dateString + random;
};

module.exports = { newNote, findByIndex, delNote, editNote, createIndex };
