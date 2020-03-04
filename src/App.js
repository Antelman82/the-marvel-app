import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

function App() {

  Axios({
    method: 'GET',
    url: 'https://gateway.marvel.com/v1/public/characters?apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80'
  })
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
