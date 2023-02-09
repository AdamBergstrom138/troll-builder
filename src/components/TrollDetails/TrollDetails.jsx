import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function TrollDetails() {
    // hooks
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const trollDetails = useSelector(store => store.trollDetails)

    console.log("Troll details in Details:", trollDetails);
    // FETCH_MOVIEDETAILS grabs the info for one movie based on the ID we clicked on
    useEffect(() => {
        const trollId = params.id;
        console.log('trollId', trollId);
        dispatch({ 
            type: 'FETCH_TROLLDETAILS',
            payload: trollId
        });
    }, []);
    // back button
    const handleBackClick = () => {

        history.push('/')
}

    return (
        <main>
            <h1>Details</h1>
            <h1>{trollDetails.name}</h1>
            <div>
            {trollDetails.map((troll, index) => {
                return (
                    <div className='detailsBox' key={index}>
                        <h2>Name: {troll.name}</h2>
                        <img src={troll.image}/>
                        <h3>Description: {troll.description}</h3>
                        <h4>Born: {troll.created}</h4> 
                        <h5>Element: {troll.element}</h5>
                        
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