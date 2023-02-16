import React from 'react';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {

  // const github = () => {
  //   console.log('go to my github')
  // }

  return (
  <footer>
    &copy; Adam Bergstrom   
    {/* getting errors from this code! so i changed class to className*/}
  <a href="https://github.com/AdamBergstrom138"><i className="nes-icon github is-large"></i></a>

  </footer>
  )
}

export default Footer;
