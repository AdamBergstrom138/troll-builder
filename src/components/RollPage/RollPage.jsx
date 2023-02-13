import React, {useState}from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
//🧌 
function RollPage() {
  const dispatch = useDispatch();
    
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const user = useSelector((store) => store.user);

  const random = () => {
    let element = Math.floor(Math.random() * 3);
    if(element === 0){
      element = 'fire';
    } else if (element === 1){
      element = 'swamp';
    } else if (element === 2){
      element = 'earth'
    }
    let head = Math.floor(Math.random() * 3);
    if(head === 0){
      head = 'head1';
    } else if (head === 1){
      head = 'head2';
    } else if (head === 2){
      head = 'head3'
    }
    let body = Math.floor(Math.random() * 3);
    if(body === 0){
      body = 'body1';
    } else if (body === 1){
      body = 'body2';
    } else if (body === 2){
      body = 'body3'
    }

    console.log('element:', element, 'head:', head, 'body:', body);
    addNewTroll2(element, head, body);
  }

  const addNewTroll2 = (element, head, body) => {
    console.log('in addNewTroll')
    let newTroll = {
      name: nameInput,
      description: descriptionInput,
      element: element,
      head: head,
      body: body,
      userid: user.id
    }
    
    // Yell at a Saga function to send the new troll
    // data to our server:
    dispatch({
      type: 'ADD_TROLL',
      payload: newTroll
    })
    clearTrollForm();
}

  const addNewTroll = (event) => {
    event.preventDefault();
    console.log('in addNewTroll')
    let newTroll = {
      name: nameInput,
      description: descriptionInput,
      userid: user.id
    }
    
    // Yell at a Saga function to send the new troll
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
      <button onClick={(event) => random()}>random</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default RollPage;
