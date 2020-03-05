import React, { Component } from 'react';
import Axios from 'axios'

class Tile extends Component {
    
    handleClick = (currentTile) => {
        console.log('handleClick')
        console.log(currentTile)

    }

    render(){
        console.log('Tile Component Render')
        // console.log(this.props)
        // console.log(this.props.characters.name)
        // console.log(this.props.characters.id)
        // console.log(this.props.comic)

        let tiles = []

        for (let i=0;i<20;i++){
            let currentTile =  `Tile${i+1}`
            let currentComic = (this.props.characters && this.props.characters.id)
            let currentCharacter = (this.props.characters && this.props.characters.name)
            let currentBackgroundImg = (this.props.comic && `${this.props.comic.thumbnail.path}.${this.props.comic.thumbnail.extension}`)
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

export default Tile