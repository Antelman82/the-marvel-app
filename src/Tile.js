/* eslint-disable no-extend-native */
import React, { Component } from 'react';

class Tile extends Component {
    // Eventually, this handle click will flip the card and allow for the game logic to be used.
    handleClick = (currentTile) => {
        console.log('handleClick')
        console.log(currentTile)
        // console.log(this.props)
        console.log(currentTile.currentBackgroundImg)
    }
    // There will need to be a second handle click for a new button(div) that will contain an "INFO" icon in the corner that will trigger the BIO of the character. BUT ONLY WHEN IT'S FLIPPED OVER!

    

    render(){
        console.log('Tile Component Render')
        // console.log(this.props.characters.comics.items)

        let tiles = []
        let tileCount = 10
       
        // creates an array of different comic book paths to use in an axios call
        const characterComicURIs = this.props.characters.comics.items.map((cover) => {
            return cover.resourceURI
        }) //this works
        // console.log(characterComicURIs) //returns list of URIs correctly
        // console.log(characterComicURIs[0])

        const shuffle = function (array) {
            let currentIndex = array.length
            let tempValue, randomIndex

            while ( 0 !== currentIndex) {
                randomIndex = Math.floor(Math.random()*currentIndex)
                currentIndex -=1
                tempValue = array[randomIndex]
                array[randomIndex] = tempValue
            }
            return array
        }
        // console.log(shuffle(characterComicURIs))
        let shuffledURIs = shuffle(characterComicURIs)

        //This logic needs to be improved to use an array or object with list of comicbook covers that represent the character, and then create two stiles per cover, and then randomize the covers and pass them to the tile div.
        for (let i=0;i<tileCount;i++){
            let currentCharacterId = (this.props.characters && this.props.characters.id)
            let currentCharacter = (this.props.characters && this.props.characters.name)
            // let currentBackgroundImg = (this.props.comic && `${this.props.comic.thumbnail.path}.${this.props.comic.thumbnail.extension}`) // this works, but it's static. 
            // instead of the above, I need to use the shuffle function and pull a value from the index.
            let currentBackgroundImg = shuffledURIs[i]
            let defaultBackgroundImg = '/images/tileback.jpeg'
            let currentTile =  {
                tileId: `Tile${i+1}`, 
                currentCharacter: currentCharacter, 
                currentCharacterId: currentCharacterId, 
                currentBackgroundImg: currentBackgroundImg
            }

            //shuffle tiles array.

            // console.log(currentBackgroundImg)
            tiles.push(
                <div className='flex-cell'>
                    <div 
                        className='flex-item' 
                        key={i} 
                        onClick={() => this.handleClick(currentTile)}
                        style={{ 
                            backgroundImage:  `url(${defaultBackgroundImg})`
                        }}
                        >
                        {/* {currentComic} */}
                        {/* <p>{currentCharacter}</p> */}
                    </div>
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