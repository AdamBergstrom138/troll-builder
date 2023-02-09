import React, {useState}from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
//🧌 
function RollPage() {
  const dispatch = useDispatch();
    
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const user = useSelector((store) => store.user);

  const addNewTroll = (event) => {
    event.preventDefault();
    console.log('in addNewTroll')
    let newTroll = {
      name: nameInput,
      description: descriptionInput,
      userid: user.id
    }
    
    // Yell at a Saga function to send the newPlant
    // data to our server:
    dispatch({
      type: 'ADD_TROLL',
      payload: newTroll
    })
    clearTrollForm();
}

const clearTrollForm = () => {
  setNameInput('');
  setDescriptionInput('');
}


  return (
    <div className="container">
      <h1>Troll Builder Roll-A-Troll page</h1>
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <form onSubmit={addNewTroll}>
        <input
          type='text'
          placeholder="Name"
          value={nameInput}
          onChange={(evt) => setNameInput(evt.target.value)} />
        <input
          type='text'
          placeholder="Description"
          value={descriptionInput}
          onChange={(evt) => setDescriptionInput(evt.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default RollPage;
