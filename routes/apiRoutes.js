// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
const router = require('express').Router();
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const { json } = require('express');
// var waitListData = require('../data/waitinglistData');
//localhost:3001/api
/* 


* The following API routes should be created:



  * DELETE `/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
  */

//  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

console.log(uuidv4())
router
  .route('/notes')
  .get((_req, res) => {
    res.json(db);
  })

  //* POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
  .post((req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
 
      db.push(req.body);

      req.body.id = uuidv4();
      //const json = JSON.parse(db);
      //fs.writefile() stringify =>db
      fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
        if (err) throw err;
        console.log('This File is ready to go!');
      })
      res.json(db)
  
  });

router.delete('/notes/:id', (_req, res) => {
  // fs.readFile(path.join(db), (err, data) => {
  //   if (err) throw err;
  //   const json = JSON.parse(data);
  //   const result = json.filter(note => {
  //     if (note.id === req.params.id) {
  //       const index = json.indexof(note);
  //       json.splice(index, 1)
  //       fs.writeFile(path.join(db), JSON.stringify(json), (err) => {
  //         if (err) throw err;
  //         console.log('This Files Has Been Removed');
  //       })
  //     }
  //   })
  // }
  //req.params.id
  //res.json(waitListData);
//)
});
//res.end();

// ---------------------------------------------------------------------------
// I added this below code so you could clear out the table while working with the functionality.
// Don"t worry about it!

module.exports = router;
