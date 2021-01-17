// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');
var router = require('express').Router();

// ===============================================================================
// ROUTING
// ===============================================================================
//localhost:3001
/*
The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.
 */

router.get('/notes', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});


// If no matching route is found default to home
router.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
