const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  let id = req.user.id;
  // what is the value of req.user????
  console.log('req.user:', req.user, 'req.user.id:', req.user.id);
  // if(req.user.clearance_level < 3 ){
  //   console.log('you got it adam!');
  // }

  const sqlQuery =`
  SELECT "name", "description", "created", "element", "head", "body", "image", "username"
  FROM "troll"
  JOIN "user"
  ON "user"."id" = "troll"."user_id"
  WHERE "user"."id"= $1;
  `

  const sqlValues = [id];

  pool.query(sqlQuery, sqlValues)

  // pool
    // .query(`SELECT * FROM "secret"
    // WHERE "clearance_level"=$1
    // ORDER BY "id";`)

    // const sqlValues = [currentUserId];

    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making GET for troll:', error);
      res.sendStatus(500);
    });
});


// `
//   SELECT * FROM "secret"
//   WHERE "secrecy_level"<=$1
//   ORDER BY "id";
//   `

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
