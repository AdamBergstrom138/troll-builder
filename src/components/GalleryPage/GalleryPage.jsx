import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function GalleryPage() {
  const dispatch = useDispatch();
  const store = useReduxStore();
  const history = useHistory();

  const alltrolls = useSelector((store) => store.alltrolls);


  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_TROLLS' });
}, []);



  return (
    <div className="container">
      <h1>Gallery Page</h1>
      <h1>Trolls</h1>
            <section className="trolls">
                {alltrolls.map((troll) => {
                    return (
                        <div className='trollBox' key={troll.id} >
                            <h3>{troll.name}</h3>
                            <img onClick={() => handleClick(troll)} src={troll.image} alt={troll.name}/>
                        </div>
                    );
                })}
            </section>
    </div>
  );
}

export default GalleryPage;
