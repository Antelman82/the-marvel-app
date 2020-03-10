import React, { Component } from 'react';
import Axios from 'axios'
import Tile from './Tile'

class GameTiles extends Component {
    // This tile state will be used when we try and do a randome iteration through the tile backgrounds so we only have two of each!!! this is kind of important for this game.
    state = {
    }

    getComics(){
        Axios({
            method: 'GET',
            // Replace first part of the url for each randome comic book's URI from the tile's click result.
            url: `https://gateway.marvel.com/v1/public/comics/60151?&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80`
        })
        .then(response => {
            //I need to pull multiple comics for the character.
            const comic = response.data.data.results[0]
            this.setState({ 
                comic,
                apiDataLoaded: true
            })
        })
        .catch(error => {
            this.setState({
                error,
                apiDataLoaded: false
            })
        })
    }

    componentDidMount(){
        this.getComics()
    }

    render(){
        return(
            <Tile characters={this.props.characters} comic={this.state.comic}  />
        )
    }
}

export default GameTiles