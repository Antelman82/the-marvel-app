import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'

import GameTiles from './GameTiles'
import CharacterBio from './CharacterBio'
// import { render } from '@testing-library/react';
class App extends Component {

  state = {
    characters: [],
    currentChar: '',
    tile: [],
    isLoading: true,
    errors: null
  }

  getCharacters(){
    // Axios.get(`https://gateway.marvel.com/v1/public/characters?limit=100&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80`)
    //   .then(response => {
    //     // console.log(response.data.data.results)
    //     const characters = response.data.data.results;
    //     this.setState({ characters });
    //   })
    // .catch(error => {
    //   console.log(error)
    // })

    Axios({
      method: 'GET',
      url: 'https://gateway.marvel.com/v1/public/characters?limit=100&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80'
    })
    .then(response => {
      const characters = response.data.data.results[52]
      this.setState({ 
        characters,
        apiDataLoaded: true
      })


      console.log('axios')

    })
    .catch(error => {
      console.log(error)
      this.setState({
        error,
        apiDataLoaded: false
      })
    })    
  }

  componentDidMount(){
    this.getCharacters()
  }

  render(){
      console.log('render')

    return (
      <div>
        <header className='header'>
          <h1>Marvel Match</h1>
          <nav className='nav'>
            <li><a href='#'>How to play</a></li>
            <li><a href='#'>Contact Info</a></li>
            <li><a href='#'>Feedback</a></li>
          </nav>
        </header>
        <main className='main'>
          <div className='game-board-container'>
            <GameTiles />
          </div>
          <aside>INFO WINDOW
            {this.state.apiDataLoaded && <CharacterBio characters={this.state.characters} />}
            {/* <div>Window-State-2
              <div>Game Status</div>
              <div>Game Statistics</div>
            </div> */}
          </aside>
        </main>
        <footer>footer
        </footer>

      </div>
    );
  }
}

export default App;
