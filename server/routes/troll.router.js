const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    let id = req.user.id;
    console.log('req.user:', req.user, 'req.user.id:', req.user.id);

    const sqlQuery =`
    SELECT "troll_id", "name", "description", "created", "element", "head", "body", "image", "username"
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


  // GET route for JUST ONE Troll:
  // TODO join and add likes
router.get('/:id', (req, res) => {
  const queryText = `
  SELECT "troll_id", "name", "description", "created", "element", "head", "body", "image", "username"
  FROM "troll"
  JOIN "user"
  ON "user"."id" = "troll"."user_id"
  WHERE "troll"."troll_id"= $1;
  `;
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((error) => {
      console.log('Error completing SELECT trollDetails query', error);
      res.sendStatus(500);
    });
});
  module.exports = router;
  