import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import LikeButton from '../LikeButton/LikeButton';



function GalleryDetails() {
    // hooks
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const trollDetails = useSelector(store => store.trollDetails)
    // reformatting date 

    // const likes = useSelector(store => store.likes)

    console.log("Troll details in GalleryDetails:", trollDetails);
    // FETCH_TROLLDETAILS grabs the info for one Troll based on the ID we clicked on
    // TODO GET Likes
    useEffect(() => {
        const trollId = params.id;
        console.log('trollId', trollId);
        dispatch({ 
            type: 'FETCH_TROLLDETAILS',
            payload: trollId
        });
        // dispatch({ 
        //     type: 'FETCH_LIKES',
        //     payload: trollId
        // });

      
    }, []);
    // back button
    const handleBackClick = () => {

        history.push('/gallery')
}

    return (
        <main>
            <div className='detailsHeader'>
            <h1>Details</h1>
            </div>
            <div>
            {trollDetails.map((troll, index) => {
                return (
                    <div className='detailsBox' key={troll.troll_id}>
                        <h2>Name: {troll.name}</h2>
                        <img src={troll.image}/>
                        <h3>Created by: {troll.username}</h3>
                        <h3>Description: {troll.description}</h3>
                        <h4>Born: {new Date(troll.created).toLocaleDateString()}</h4> 
                        <h4>Element: {troll.element}</h4>
                        <div><LikeButton troll={troll} /></div>
                    </div>
                )
            })}
            </div>
            
            <section className="backButton">
                <button className="nes-btn" onClick={handleBackClick}>Back</button>
            </section>
        </main>

    );
}

export default GalleryDetails;