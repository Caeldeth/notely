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