import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import LikeButton from '../LikeButton/LikeButton';


function TrollDetails() {
    // hooks
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const trollDetails = useSelector(store => store.trollDetails)
    // const likes = useSelector(store => store.likes)

    console.log("Troll details in Details:", trollDetails);
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

        history.push('/')
}

    return (
        <main>
            <h1>Details</h1>
            <div>
            {trollDetails.map((troll, index) => {
                return (
                    <div className='detailsBox' key={index}>
                        <h2>Name: {troll.name}</h2>
                        <img src={troll.image}/>
                        <h3>Description: {troll.description}</h3>
                        <h4>Born: {troll.created}</h4> 
                        <h4>Element: {troll.element}</h4>
                        <div><LikeButton troll={troll}/></div>
                    </div>
                )
            })}
            </div>
            
            <section className="Details">
                <button onClick={handleBackClick}>Back</button>
            </section>
        </main>

    );
}

export default TrollDetails;