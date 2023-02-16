import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function DeleteButton ({ troll }) {
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();

    const handleDelete = (event) => {
        event.preventDefault();
        const trollId = params.id;

        console.log('*******clicked delete*********', trollId);
        dispatch({
            type: 'DELETE_TROLL',
            payload: trollId
          })
        handleBackClick();
    }
    const handleBackClick = () => {

        history.push('/')
}

    return ( 
        <>
        <button type="button" className="nes-btn is-error" onClick={handleDelete}>
            Delete
        </button>
        </>
  )
}
    export default DeleteButton;