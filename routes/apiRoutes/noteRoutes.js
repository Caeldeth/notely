// initialize router
const router = require('express').Router();
// link to database
const { notesDB } = require('../../db/db.json');
// set up function names to do the work of notes, need to create functions
const { newNote, findByIndex, editNote, delNote } = require('../../lib/notes');

// create mostly random id
function createIndex() {
    // thanks to jsmates.com/blog/generating-simple-unique-identifier-using-javascript !
    const dateString = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2);
    return dateString + random;
};

router.get('/notes', (req, res) => {
    res.json(notesDB);
});

router.post('/notes', (req, res) => {
    // create new note if id exists, else edit existing note
    if(!req.body.id) {
        req.body.id = createIndex();
        newNote(req.body, notesDB);
    } else {
        editNote(req.body, notesDB);
    }

    res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
    const note = findByIndex(req.params.id, notesDB);

    delNote(note, notesDB);
    res.json();
});

module.exports = router;