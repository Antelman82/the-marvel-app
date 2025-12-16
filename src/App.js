import React from 'react';
import './App.css';
import './ContactInfo.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Main from './Main'
import HowToPlay from './HowToPlay'
import ContactInfo from './ContactInfo'
import Feedback from './Feedback'

function App() {
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
          <Route path="/" element={<Main />} />
          <Route path="/howtoplay" element={<HowToPlay />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        <footer>© Antelman Enterprises, LLC
        </footer>
      </div>
    </Router>
  );
}

export default App;
