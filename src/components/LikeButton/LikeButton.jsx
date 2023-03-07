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

    return ( 
  <>
        <button type="button" className="nes-btn" onClick={handleLike}>
            Like
        </button>
         <div>
            <p>likes: {troll.likes}</p>
         </div>
         </>
  )
}
    export default LikeButton;