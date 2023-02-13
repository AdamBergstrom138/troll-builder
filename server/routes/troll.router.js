const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// This get route is to get all the trolls of all users
router.get('/all', rejectUnauthenticated, (req, res) => {
  // let id = req.user.id;
  // console.log('req.user:', req.user, 'req.user.id:', req.user.id);
  console.log('in get all');
  const sqlQuery =`
  SELECT *
  FROM "troll"
  JOIN "user"
  ON "user"."id" = "troll"."user_id"
  ORDER BY "likes" DESC;
  `
  // const sqlValues = [id];
  pool.query(sqlQuery)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making GET ALL for troll:', error);
      res.sendStatus(500);
    });
});

// This get route is to get all trolls for an individual user!
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
      .then((results) => res.send(results.rows))
      .catch((error) => {
        console.log('Error making GET for troll:', error);
        res.sendStatus(500);
      });
  });


  // GET route for JUST ONE Troll based on that trolls id
router.get('/:id', (req, res) => {
  const queryText = `
  SELECT "troll_id", "name", "description", "created", "element", "head", "body", "image", "username", "likes"
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

// PUT route for likes based on troll id
router.put('/:id', (req, res) => {
  // const updatedID = req.body;
  id = req.params.id
  console.log('in LIKE PUT router', id);
  const queryText = `
  UPDATE troll
  SET "likes" = "likes" + 1 
  WHERE "troll_id"=$1;
  `;
  const queryValues = [
    id
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing PUT likes', err);
      res.sendStatus(500);
    });
});

// POST Route to create a troll
router.post('/', (req, res) => {
  const newTroll = req.body;
  console.log('newTroll', newTroll);
  const queryText = `
  INSERT INTO "troll" ("name", "description", "element", "head", "body", "accessory", "background", "user_id", "image", "likes")
  VALUES 
    ($1, $2, $3, $4, $5, 'none', 'none', $6, $7, '0');
  
    `;
  const queryValues = [
    newTroll.name,
    newTroll.description,
    newTroll.element,
    newTroll.head,
    newTroll.body,
    Number(newTroll.userid),
    newTroll.image
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing POST new Troll query', err);
      res.sendStatus(500);
    });
});

// DELETE Route to delete a troll only the user who created the troll can delete it
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('Req.params: ', req.params.id);

  const sqlQuery = `
    DELETE FROM "troll"
    WHERE "troll_id" = $1;
    `;
  pool.query(sqlQuery, [req.params.id])
  .then((response) => {
    console.log('NAILED IT!!!!! Delete Complete', response.body);
    res.sendStatus(200);

  })
  .catch((error) => {
    console.log('Error: ', error);
    res.sendStatus(500);
  })


  // endpoint functionality
});

  module.exports = router;
  