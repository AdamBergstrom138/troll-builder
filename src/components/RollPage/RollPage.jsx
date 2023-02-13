import React, {useState}from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

//🧌 
function RollPage() {
  const dispatch = useDispatch();
  const history = useHistory();
    
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const user = useSelector((store) => store.user);
  const trolls = useSelector((store) => store.troll);

  const random = () => {
    let element = Math.floor(Math.random() * 3);
    if(element === 0){
      element = 'Fire';
    } else if (element === 1){
      element = 'Swamp';
    } else if (element === 2){
      element = 'Forest'
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
      userid: user.id,
      image:`${element}${head}${body}.png`
    }
    
    // Yell at a Saga function to send the new troll
    // data to our server:
    dispatch({
      type: 'ADD_TROLL',
      payload: newTroll
    })
    clearTrollForm();
    goToNewTroll();
}

//   const addNewTroll = (event) => {
//     event.preventDefault();
//     console.log('in addNewTroll')
//     let newTroll = {
//       name: nameInput,
//       description: descriptionInput,
//       userid: user.id
//     }
    
//     // Yell at a Saga function to send the new troll
//     // data to our server:
//     dispatch({
//       type: 'ADD_TROLL',
//       payload: newTroll
//     })
//     clearTrollForm();
// }

const clearTrollForm = () => {
  setNameInput('');
  setDescriptionInput('');
}
const goToNewTroll = () => {
  history.push(`/`)
}

  return (
    <div className="container">
      <h1>Roll-A-Troll! {user.username}!</h1>
      <img src="imgs/test.gif" alt="laughing troll" width="512" height="512" ></img>
      {/* <h2>{user.username}!</h2> */}
      {/* <p>Your ID is: {user.id}</p> */}
      <h3>Enter a Name and Description of your troll!</h3>
      <form >
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
      </form>
      <button onClick={(event) => random()}>random</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default RollPage;
