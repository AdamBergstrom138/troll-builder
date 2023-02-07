import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

function UserPage() {
  const dispatch = useDispatch();
  const store = useReduxStore();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const trolls = useSelector(store => store.troll);
    // FETCH_MOVIES will grab all the Movies and render them to the dom by mapping
    useEffect(() => {
        dispatch({ type: 'FETCH_TROLLS' });
    }, []);
  return (
    <div className="container">
      <h1>Troll Builder User Page</h1>
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <h1>Trolls</h1>
      <section className="trolls">
                {trolls.map(troll => {
                    return (
                        <div  key={troll.id} >
                            <h3>{troll.name}</h3>
                        </div>
                    );
                })}
            </section>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
