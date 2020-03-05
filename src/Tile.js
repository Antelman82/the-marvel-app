import React, { Component } from 'react';

class Tile extends Component {
    // Eventually, this handle click will flip the card and allow for the game logic to be used.
    handleClick = (currentTile) => {
        console.log('handleClick')
        console.log(currentTile)
    }
    // There will need to be a second handle click for a new button(div) that will contain an "INFO" icon in the corner that will trigger the BIO of the character. BUT ONLY WHEN IT'S FLIPPED OVER!



    render(){
        console.log('Tile Component Render')
        // console.log(this.props)
        // console.log(this.props.characters.name)
        // console.log(this.props.characters.id)
        // console.log(this.props.comic)

        let tiles = []

        //This logic needs to be improved to use an array or object with list of comicbook covers that represent the character, and then create two tiles per cover, and then randomize the covers and pass them to the tile div.
        for (let i=0;i<20;i++){
            let currentCharacterId = (this.props.characters && this.props.characters.id)
            let currentCharacter = (this.props.characters && this.props.characters.name)
            let currentBackgroundImg = (this.props.comic && `${this.props.comic.thumbnail.path}.${this.props.comic.thumbnail.extension}`)
            let defaultBackgroundImg = '/images/tileback.jpeg'
            let currentTile =  {
                tileId: `Tile${i+1}`, 
                currentCharacter: currentCharacter, 
                currentCharacterId: currentCharacterId, 
                currentBackgroundImg: currentBackgroundImg
            }

            // console.log(currentBackgroundImg)
            tiles.push(
                <div 
                    className='tile' 
                    key={i} 
                    onClick={() => this.handleClick(currentTile)}
                    style={{ 
                        backgroundImage:  `url(${defaultBackgroundImg})`,
                        backgroundSize: `cover`, 
                        backgroundPosition: `center center`
                    }}
                    >
                    {/* {currentComic} */}
                    {/* <p>{currentCharacter}</p> */}
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