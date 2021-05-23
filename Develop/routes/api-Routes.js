const fs = require('fs');
const { brotliDecompressSync } = require('zlib');
const db = require('../db/db.json');

var id = 0;

const noteData = fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    console.log(data);
});

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.readFileSync("./db/db.json", db);
        res.json(db);
    });


    app.post('/api/notes', (req, res) => {
        fs.readFileSync("./db/db.json", db);
        
        let newNote = {
            id: id,
            title: req.body.title,
            text: req.body.text
        }
         console.log(newNote)
        db.push(newNote);
        fs.writeFileSync("./db/db.json", JSON.stringify(db), "utf-8");
        id++
        res.send(db);
    });
};
