// initialize router
const router = require('express').Router();
// link to database
const { notes } = require('../../db/db');
// set up function names to do the work of notes, need to create functions
const { newNote, findByIndex, editNote, delNote, createIndex } = require('../../lib/notesJobs');

router.get('/notes', (req, res) => {
    let savedNotes = notes;
    res.json(savedNotes);
});

router.post('/notes', (req, res) => {
    // create new note if id exists, else edit existing note
    if(!req.body.id) {
        req.body.id = createIndex();
        newNote(req.body, notes);
    } else {
        editNote(req.body, notes);
    }

    res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
    const note = findByIndex(req.params.id, notes);

    delNote(note, notes);
    res.json();
});

module.exports = router;