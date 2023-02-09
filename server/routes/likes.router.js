const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/:id', (req, res) => {
    const queryText = `
    SELECT count("likes"."likes")
    FROM "likes"
    WHERE "likes"."troll_id" = $1;
    `;
    pool.query(queryText, [req.params.id])
      .then((result) => { res.send(result.rows); })
      .catch((error) => {
        console.log('Error completing SELECT trollDetails query', error);
        res.sendStatus(500);
      });
  });


module.exports = router;