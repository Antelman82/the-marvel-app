import React, { Component } from 'react';
import Axios from 'axios'

class GameTiles extends Component {

    state = {
        tile: []
    }

    handleClick = (currentTile) => {
        console.log('handleClick')
        console.log(currentTile)
        // console.log(currentTile)
        // this.setState({
        //   tile
        // }) 
    }
    
    getComics(){
        Axios({
            method: 'GET',
            url: `https://gateway.marvel.com/v1/public/comics/60151?&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80`
        })
        .then(response => {
            const comic = response.data.data.results[0]
            this.setState({ 
                comic,
                apiDataLoaded: true
            })
            console.log('getComics axios')
            // console.log(response)
            // console.log(response.data.data.results)
            // console.log(response.data.data.results[0].thumbnail.path)
        // const comics = response.data.data.results[0]
        // this.setState({ 
        //     comics,
        //     apiDataLoaded: true
        //     })
            
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
        console.log('GameTiles Component Render')
        console.log(this.props)
        console.log(this.props.characters.name)
        console.log(this.props.characters.id)
        console.log(this.state.comic)

        let tiles = []

        for (let i=0;i<20;i++){
            let currentTile =  `Tile${i+1}`
            let currentComic = (this.props.characters && this.props.characters.id)
            let currentCharacter = (this.props.characters && this.props.characters.name)
            let currentBackgroundImg = (this.state.comic && `${this.state.comic.thumbnail.path}.${this.state.comic.thumbnail.extension}`)
            console.log(currentBackgroundImg)
            tiles.push(
                <div 
                    className='tile' 
                    key={i} 
                    onClick={() => this.handleClick(currentTile)}
                    style={{ 
                        backgroundImage:  `url(${currentBackgroundImg})`,
                        backgroundSize: `cover`, 
                        backgroundPosition: `center center`
                    }}
                    >
                    {currentComic}
                    <p>{currentCharacter}</p>
                </div>)
        }
        return(
            <>
                {tiles}
            </>
        )
    }
}

export default GameTiles