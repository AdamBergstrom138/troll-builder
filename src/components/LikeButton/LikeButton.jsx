import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function LikeButton ({ troll }) {
    const dispatch = useDispatch();
    const params = useParams();

    const handleLike = (event) => {
        event.preventDefault();
        // const trollId = params.id;
        const trollId = troll.troll_id
        console.log('trollId of troll clicked like', trollId)
        console.log('clicked like', troll.troll_id);
        dispatch({ 
            type: 'ADD_LIKE',
            payload: trollId
        });
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