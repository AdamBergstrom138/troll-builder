import { useState } from 'react';
import axios from 'axios';

function LikeButton ({ troll }) {
    const handleLike = (event) => {
        event.preventDefault();
        console.log('clicked like', troll.troll_id);
        // dispatch({ 
        //     type: 'ADD_LIKE',
        //     payload: troll.troll_id
        // });
    }
    
    // const putLike = ({troll}) => {
    //     console.log('you liked troll', troll.id);
    //     axios.put(`/trolls/like/${troll.id}`)
    //     .then(response => {
    //         console.log(response);
    //         fetchTrolls();
    //     })
    //     .catch(err => {
    //         alert('Error in PUT route');
    //         console.log(err);
    //     })
    // }
    
    // const putLike = ({troll}) => {
    //     console.log('you liked troll', troll, 'troll likes', troll.likes);

    //     axios.put(`/trolls/like/${troll.id}`,
    //     {
    //         id: troll.id,
    //         likes: troll.likes
    //     }
    //     )
    //     .then(response => {
    //         console.log(response);
    //         fetchTrolls();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }

    // henris code
    // router.put('/:id', (req,res) => {
    //     console.log('In PUT route');
    //     console.log('req.params: ', req.params.id);
    //     // console.log('req.body: ', req.body);
        
    //     let sqlQuery = 
    //         `UPDATE "list"
    //             SET "likes" = "likes" + 1
    //             WHERE "id"=$1;`;
    //     let sqlValues = [req.params.id];
    //     pool.query(sqlQuery, sqlValues)
    //     .then((response) => {
    //         console.log('Success in PUT');
    //         res.sendStatus(200);
    //     })
    //     .catch((error) => {
    //         console.log('Error in PUT: ', error)
    //         res.sendStatus(500);
    //     })
    // })

    return ( 
  <>
        <button type="button" onClick={handleLike}>
            Like
        </button>
         <div>
            <p>likes: {troll.likes}</p>
         {/* {likes.map((like, index) => {
             return (
                 <div className='likesBox' key={index}>
                     <h2>Likes: {}</h2> 

                 </div>
             )
         })} */}
         </div>
         </>
  )
}
    export default LikeButton;