import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div className='about'>
        {/* <p>This about page is for anyone to read!</p> */}
        <h3>Adam Bergstrom - Full Stack Engineer</h3>
        <p>Troll Generator allows user to create an account and quickly generate randomized trolls.</p>
        The user can see what trolls they've Create, Delete the trolls they don't want, and like and view other users trolls<p></p>
        <h4>Technologies Used</h4>
        <p>JavaScript</p>
        <p>Node.js</p>
        <p>React</p>
        <p>Redux</p>
        <p>Sagas</p>
        <p>Express</p>
        <p>NES.css - styling</p>
        <h4>Special Thanks</h4>
        <p>I would like to thank my Instructors - Matt, Dane, Kris, Key, and Kevin!</p>
        <p>All of the staff at Prime!</p>
        <p>The Vonnegut Cohort</p>
        <p>My Family</p>
      </div>
    </div>
  );
}

export default AboutPage;
