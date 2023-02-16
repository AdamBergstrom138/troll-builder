import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';
import LikeButton from '../LikeButton/LikeButton';
import "nes.css/css/nes.min.css";
import './GalleryPage.css'

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
      <h2>Trolls</h2>
            <section className="trolls">
                {alltrolls.map((troll) => {
                    return (
                        <div className='trollBox' key={troll.troll_id} >
                            <h3>{troll.name}</h3>
                            <img src={troll.image} alt={troll.name} />
                            {/* <img onClick={() => handleClick(troll)} src={troll.image} alt={troll.name}/> */}
                            <h4>{troll.description}</h4>
                            <h4>Created by: {troll.username}</h4>
                            <h5>Born on:{new Date(troll.created).toLocaleDateString()}</h5>
                            <div><LikeButton troll={troll} /></div>
                        </div>
                    );
                })}
            </section>
    </div>
  );
}

export default GalleryPage;
