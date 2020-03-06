/* eslint-disable no-extend-native */
import React, { Component } from 'react';

class Tile extends Component {

    state = {
        bgImg: '/images/tileback.jpeg'
    }

    // Eventually, this handle click will flip the card and allow for the game logic to be used.
    handleClick = (currentTile) => {
        console.log('handleClick')
        console.log(currentTile)
        // console.log(this.props)
        console.log(currentTile.currentBackgroundImg)
        currentTile.currentBackgroundImg = '/images/sample-iron-man.jpg'
        console.log(currentTile.currentBackgroundImg)
        let curBgImg = document.querySelector(`.${currentTile.tileId}`)
        console.log(curBgImg)
        curBgImg.style.backgroundImage = `url('/images/sample-iron-man.jpg')`
        // this.setState({
        //     bgImg: '/images/sample-iron-man.jpg'
        // })
    }
    // There will need to be a second handle click for a new button(div) that will contain an "INFO" icon in the corner that will trigger the BIO of the character. BUT ONLY WHEN IT'S FLIPPED OVER!

    

    render(){
        console.log('Tile Component Render')

        let tiles = []
        let tileCount = 10
       
        // creates an array of different comic book paths to use in an axios call
        const characterComicURIs = this.props.characters.comics.items.map((cover) => {
            return cover.resourceURI
        })

        //This function is used to double the comics in the array
        const doubleArray = function(array){
            let tempArray = []
            for (let i=0;i<array.length;i++){
                for (let j=0;j<2;j++){
                    tempArray.push(array[i])
                }
            }
            return tempArray
        }

        //This function is used to shuffle the values in the array in a random order. Fisher–Yates Shuffle
        const shuffle = function (array) {
            let m = array.length, t, i;

                // While there remain elements to shuffle…
                while (m) {

                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;
        }

        // in this, we have a rather large list of values, and we need to pair it down to be limited to the defined number of values. since the tile count is set above, we will reference that. 
        let comicsDoubled = doubleArray(characterComicURIs.slice(0,tileCount))
        // now that we have an array that contains the number of values we want, now it can be shuffled. 
        let shuffledURIs = shuffle(comicsDoubled)


        // this section assigns a bunch of variables, we then push each value into a tiles array to be oplulated in the GameTiles component.
        for (let i=0;i<tileCount;i++){
            let currentCharacterId = (this.props.characters && this.props.characters.id)
            let currentCharacter = (this.props.characters && this.props.characters.name)
            let currentBackgroundImg = shuffledURIs[i]
            let defaultBackgroundImg = '/images/tileback.jpeg'
            let currentTile =  {
                tileId: `Tile${i+1}`, 
                currentCharacter: currentCharacter, 
                currentCharacterId: currentCharacterId, 
                currentBackgroundImg: currentBackgroundImg
            }
            tiles.push(
                <div key={`Tile${i+1}`} className='flex-cell'>
                    <div 
                        className={`flex-item ${currentTile.tileId}`}
                        onClick={() => this.handleClick(currentTile)}
                        style={{ 
                            backgroundImage:  `url(${this.state.bgImg})`
                        }}
                        >
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