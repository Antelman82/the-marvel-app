import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'

import GameTiles from './GameTiles'
import { render } from '@testing-library/react';


class App extends Component {


  // Axios({
  //   method: 'GET',
  //   url: 'https://gateway.marvel.com/v1/public/characters?limit=100&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80'
  // })
  // .then(response => {
  //   console.log(response)
  // })
  // .catch(error => {
  //   console.log(error)
  // })

  

  // console.log(makeTiles())
  render(){

  // const tile = <div>{`Tiles${i}`}</div>

    
      // for (let i=0;i<=10;i++){
      //   // return (<div>{`Tile${i}`}</div>
      // <div>{`Tiles${i}`}</div>
      // }
      

    return (
      <div>
        <header className='header'>
          <h1>Marvel Match</h1>
          <nav className='nav'>
            <li>How to play</li>
            <li>Contact Info</li>
            <li>Feedback</li>
          </nav>
        </header>
        <main className='main'>main
          <div className='game-board-container'>
            <GameTiles />
          </div>
          <aside>INFO WINDOW
            <div>Window-State-1
              <div>Game Status</div>
              <div>Game Statistics</div>
            </div>
            <div>Window-State-2
              <div>Character Info
                <div>Info</div>
                <div>info-details</div>
              </div>
            </div>
          </aside>
        </main>
        <footer>footer
        </footer>

      </div>
    );
  }
}

export default App;
