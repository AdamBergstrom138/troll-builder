import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function DeleteButton ({ troll }) {
    const dispatch = useDispatch();
    const params = useParams();

    const handleDelete = (event) => {
        event.preventDefault();
        const trollId = params.id;
        // console.log('trollId', trollId)
        console.log('clicked delete', trollId);
        dispatch({
            type: 'DELETE_TROLL',
            payload: trollId
          })
    }

    return ( 
        <>
        <button type="button" onClick={handleDelete}>
            Delete
        </button>
        </>
  )
}
    export default DeleteButton;