import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'

import GameTiles from './GameTiles'
import CharacterBio from './CharacterBio'
// import { render } from '@testing-library/react';
class App extends Component {

  state = {
    characters: [],
    currentChar: ''
  }

  componentDidMount(){
    // Axios.get(`https://gateway.marvel.com/v1/public/characters?limit=100&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80`)
    //   .then(response => {
    //     // console.log(response.data.data.results)
    //     const characters = response.data.data.results;
    //     this.setState({ characters });
    //   })

    Axios({
      method: 'GET',
      url: 'https://gateway.marvel.com/v1/public/characters?limit=100&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80'
    })
    .then(response => {
      // console.log(response.data.data.results[52])
      // console.log(response.data.data.results[52].name)
      const characters = response.data.data.results[52]
      this.setState({ characters })
      // let characterName = response.data.data.results[52].name
      // // console.log(`${response.data.data.results[52].thumbnail.path}.${response.data.data.results[52].thumbnail.extension}`)
      // let characterThumb = `${response.data.data.results[52].thumbnail.path}.${response.data.data.results[52].thumbnail.extension}`
      // // console.log(response.data.data.results[52].comics.items.length)
      // let characterComicNumber = response.data.data.results[52].comics.items.length
      // // Character Marvel Wiki Site
      // // console.log(response.data.data.results[52].urls[1].url)
      // let characterWiki = response.data.data.results[52].urls[1].url
    })
    .catch(error => {
      console.log(error)
    })    
  }

   
  // console.log(makeTiles())
  render(){
      // console.log(characterName)
      // console.log(characterThumb)
      // console.log(characterComicNumber)
      // console.log(CharacterWiki)
      console.log('render')
      // console.log(this.state.characters)

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
            <CharacterBio characters={this.state.characters} />
            <div>Window-State-2
              <div>Game Status</div>
              <div>Game Statistics</div>
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
