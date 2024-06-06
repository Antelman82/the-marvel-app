import React, { Component } from 'react';
import './App.css';
import './ContactInfo.css'
// import Axios from 'axios'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Main from './Main'
import HowToPlay from './HowToPlay'
import ContactInfo from './ContactInfo'
import Feedback from './Feedback'

class App extends Component {

  render(){
    console.log('App Component Render')
    

    return (
      <Router>
      <div>
        <header className='header'>
          <h1>
            <Link to='/'>MARVEL MATCH</Link>
          </h1>
          <nav className='nav'>
            <ul>
              <Link to='/howtoplay'>HOW TO PLAY</Link>
              <Link to='/contactinfo'>CONTACT INFO</Link>
              <Link to='/feedback'>FEEDBACK</Link>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" component={Main}/>
          <Route path="/howtoplay" component={HowToPlay}/>
          <Route path="/contactinfo" component={ContactInfo}/>
          <Route path="/feedback" component={Feedback}/>
        </Routes>
        <footer>© Antelman Enterprises, LLC
        </footer>
      </div>
      </Router>
    );
  }
}

export default App;
