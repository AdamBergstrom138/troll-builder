import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';


function UserPage() {
  const dispatch = useDispatch();
  const store = useReduxStore();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  console.log('user', user);
  const trolls = useSelector((store) => store.troll);

  console.log('client trolls:' , trolls);

    useEffect(() => {
        dispatch({ type: 'FETCH_TROLLS' });
    }, []);

    const handleClick = (troll) => {
      
      console.log('troll clicked', troll.troll_id);
      let trollId = troll.troll_id;
      console.log(trollId);

      history.push(`/details/${trollId}`)
}

  return (
    <div className="container">
      <h1>Troll Generator User Page</h1>
      
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      <LogOutButton className="btn" />
      <h1>Trolls</h1>
            <section className="trolls">
                {trolls.map((troll) => {
                    return (
                        <div className='trollBox nes-pointer' key={troll.troll_id} >
                            <h3>{troll.name}</h3>
                            <img onClick={() => handleClick(troll)} src={troll.image} alt={troll.name}/>
                        </div>
                    );
                })}
            </section>
          </div>

  );
}

// this allows us to use <App /> in index.js
export default UserPage;

