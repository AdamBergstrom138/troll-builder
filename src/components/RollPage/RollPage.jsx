import React, {useState}from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './RollPage.css'

//🧌 
function RollPage() {
  const dispatch = useDispatch();
  const history = useHistory();
    
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const user = useSelector((store) => store.user);
  const trolls = useSelector((store) => store.troll);
// random function will randomize the attributes of the new troll
// 3 different element, head, and body types
  const random = () => {
    let element = Math.floor(Math.random() * 3);
    if(element === 0){
      element = 'fire';
    } else if (element === 1){
      element = 'swamp';
    } else if (element === 2){
      element = 'forest'
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
    // console.log('in addNewTroll')
    let newTroll = {
      name: nameInput,
      description: descriptionInput,
      element: element,
      head: head,
      body: body,
      userid: user.id,
      image:`imgs/${element}${head}${body}.png`
    }
    // Tell Saga function to send the new troll
    // data to our server:
    dispatch({
      type: 'ADD_TROLL',
      payload: newTroll
    })
    clearTrollForm();
    goToNewTroll();
}
// clearTrollForm clears the input fields
const clearTrollForm = () => {
  setNameInput('');
  setDescriptionInput('');
}
const goToNewTroll = () => {
  history.push(`/`)
}
  return (
    <div className="container">
      <h1>Create a New Troll! {user.username}!</h1>
      {/* 'troll' is for css animation */}
      <div className='troll'></div>
      {/* next 7 lines are for the word bubble in css */}
      <section className="message-list">
        <section className="message -left">
          <div className="nes-balloon from-left">
            <p>Generate a Troll!</p>
          </div>
        </section>
      </section>
      <h3>Enter a Name and Description for your new Troll!</h3>
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
      <button onClick={(event) => random()}>Generate</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default RollPage;
