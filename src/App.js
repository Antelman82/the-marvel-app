import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Main from './Main'
import GameTiles from './GameTiles'
import CharacterBio from './CharacterBio'
import HowToPlay from './HowToPlay'
import ContactInfo from './ContactInfo'
import Feedback from './Feedback'

// import { render } from '@testing-library/react';
class App extends Component {

  // state = {
  //   characters: [],
  //   currentChar: '',
  //   tile: [],
  //   isLoading: true,
  //   errors: null
  // }

  // getCharacters(){
  //   // Axios.get(`https://gateway.marvel.com/v1/public/characters?limit=100&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80`)
  //   //   .then(response => {
  //   //     // console.log(response.data.data.results)
  //   //     const characters = response.data.data.results;
  //   //     this.setState({ characters });
  //   //   })
  //   // .catch(error => {
  //   //   console.log(error)
  //   // })
  //   let selectedCharacter = 'Spider-Man'

  //   Axios({
  //     method: 'GET',
  //     url: `https://gateway.marvel.com/v1/public/characters?name=${selectedCharacter}&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80`,
  //   })
  //   .then(response => {
  //     const characters = response.data.data.results[0]
  //     this.setState({ 
  //       characters,
  //       apiDataLoaded: true
  //     })
  //     console.log('App axios')
  //   })
  //   .catch(error => {
  //     console.log(error)
  //     this.setState({
  //       error,
  //       apiDataLoaded: false
  //     })
  //   })    
  // }

  // componentDidMount(){
  //   this.getCharacters()
  // }

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
              {/* <li><a href='./src/HowtoPlay'>HOW TO PLAY</a></li>
              <li><a href='#'>CONTACT INFO</a></li>
              <li><a href='#'>FEEDBACK</a></li> */}
              <Link to='/howtoplay'>HOW TO PLAY</Link>
              <Link to='/contactinfo'>CONTACT INFO</Link>
              <Link to='/feedback'>FEEDBACK</Link>
            </ul>
          </nav>
        </header>
        <Switch>
          {/* <Route exact path="/" component={Home}/> */}
          <Route exact path="/" component={Main}/>
          <Route path="/howtoplay" component={HowToPlay}/>
          <Route path="/contactinfo" component={ContactInfo}/>
          <Route path="/feedback" component={Feedback}/>}/>
        </Switch>
        {/* <main className='main'
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
              </div>
            </aside>
            
          </div>
        </main> */}
        <footer>© Antelman Enterprises, LLC
        </footer>

      </div>
      </Router>
    );
  }
}

export default App;
