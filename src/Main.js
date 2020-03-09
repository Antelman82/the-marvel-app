import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'

import GameTiles from './GameTiles'
import CharacterBio from './CharacterBio'

class Main extends Component {

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
        let selectedCharacter = 'Spider-Man'
    
        Axios({
          method: 'GET',
          url: `https://gateway.marvel.com/v1/public/characters?name=${selectedCharacter}&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80`,
        })
        .then(response => {
          const characters = response.data.data.results[0]
          this.setState({ 
            characters,
            apiDataLoaded: true
          })
          console.log('App axios')
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
        let defaultBackgroundImg = `/images/Marvel-Wallpaper-HD-backgrounds-Wonderful.jpeg`
        return(
            <main className='main'
                style={{ 
                    backgroundImage:  `url(${defaultBackgroundImg})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center center`}}>
                
                <div className='partition'>
                    <div className='flex-container'>
                    {this.state.apiDataLoaded && <GameTiles characters={this.state.characters} />}
                    </div>
                    <aside className=''>
                    {this.state.apiDataLoaded && <CharacterBio characters={this.state.characters} />}
                    {/* <div>Window-State-2
                        <div>Game Status</div>
                        <div>Timer</div>
                        <div>Player 1 score</div>
                        <div>Player 2 score</div>
                        <div>Game Statistics</div>
                        <div>Fastest Time</div>
                    </div>*/}
                    </aside>
                </div>
            </main>
        )
    }
}

export default Main;