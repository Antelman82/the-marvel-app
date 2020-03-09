import React, { Component } from 'react';
// import { isCompositeComponent } from 'react-dom/test-utils';
import Axios from 'axios'

class Tile extends Component {

    state = {
        bgImg: '/images/tileback.jpeg',
        previousPicked: null,
        currentPicked: null,
        currentBackgroundImg: ''
    }

    // getCover(){
    //     let selectedCharacter = 'Spider-Man'
    //     let titleUrl = currentBackgroundImg
    //     console.log(`currentBackgroundImg ${currentTile.currentBackgroundImg}`)
    
    //     Axios({
    //       method: 'GET',
    //       url: `https://gateway.marvel.com/v1/public/characters?name=${selectedCharacter}&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80`,
    //     })
    //     .then(response => {
    //       const characters = response.data.data.results[0]
    //       this.setState({ 
    //         characters,
    //         apiDataLoaded: true
    //       })
    //       console.log('App axios')
    //     })
    //     .catch(error => {
    //       console.log(error)
    //       this.setState({
    //         error,
    //         apiDataLoaded: false
    //       })
    //     })    
    //   }

    // Eventually, this handle click will flip the card and allow for the game logic to be used.
    handleClick = (currentTile) => {
        console.log('handleClick')
        console.log(currentTile)
        // console.log(this.state.previousPicked)
        let curTileClass = document.querySelector(`.${currentTile.tileId}`)
        // console.log(curTileClass)
        let prevTileClass = document.querySelector(`.${this.state.previousPicked}`)
        // console.log(prevTileClass)
        // this.setState([
        //     currentBackgroundImg: c
        // ])
        console.log(currentTile.currentBackgroundURI)
        Axios({
            method: 'GET',
            url: `${currentTile.currentBackgroundURI}?&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80`,
        })
        .then(response => {
            console.log(`tile axios response`)
            currentTile.currentBackgroundImg = `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`
            console.log(currentTile.currentBackgroundImg)
            console.log(this.state.currentBackgroundImg)
            this.setState({
                currentBackgroundImg: currentTile.currentBackgroundImg
            })
            console.log(this.state.currentBackgroundImg)
            // const characters = response.data.data.results[0]
            // this.setState({ 
            // characters,
            // apiDataLoaded: true
            // })
        })
        .catch(error => {
            console.log(error)
            // this.setState({
            // error,
            // apiDataLoaded: false
            // })
        })    

            if (this.state.previousPicked == null){
                // set the last tile picked to previous tile, and set the current as the new current tile.
                this.setState({
                    previousPicked: this.state.currentPicked,
                    currentPicked: curTileClass
                })
                //this is the flip logic here
                // checks if the tile is currently the background.
                if (curTileClass.style.backgroundImage === 'url("/images/tileback.jpeg")'){
                    console.log('updating background image')
                    curTileClass.style.backgroundImage = `url('${this.state.currentBackgroundImg}')`
                }// } else {
                //     curTileClass.style.backgroundImage = `url('/images/tileback.jpeg')`
                // }
                console.log('flip current image')
                this.setState({ 
                    currentPicked: currentTile.tileId 
                    })
                    console.log(`previousPicked to ${currentTile.tileId}`)
            // else {
            //     //this is what happens if there are more than one in the
            //     if (curTileClass.style.backgroundImage === 'url("/images/tileback.jpeg")'){
            //         curTileClass.style.backgroundImage = `url('${this.state.currentBackgroundImg}')`
            //     } else {
            //         curTileClass.style.backgroundImage = `url('/images/tileback.jpeg')`
            //     }

                ////////////////////////////////////////
                ///////////////////////////////////////
                ////do I need to move this logic to the render? it doesn't seem to update on the page when it happens, but only after I click the next tile.
                //if two tiles have been flipped, this checks if they match. 
                // if (curTileClass.style.backgroundImage !== prevTileClass.style.backgroundImage){
                //     //flip both cards back over
                //     curTileClass.style.backgroundImage = `url('/images/tileback.jpeg')`
                //     prevTileClass.style.backgroundImage = `url('/images/tileback.jpeg')`
                //     this.setState({ 
                //         previousPicked: null  
                //         })
                // } else {
                //     //leave the cards flipped.
                //     console.log('You found a match.')
                // }
            }
    }        
    // There will need to be a second handle click for a new button(div) that will contain an "INFO" icon in the corner that will trigger the BIO of the character. BUT ONLY WHEN IT'S FLIPPED OVER!


    render(){
        console.log('Tile Component Render')
        console.log(this.state)

        let tiles = []
        let tileCount = 20
       
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

        // in this, we have a rather large list of values, and we need to pair it down to be limited to the defined number of values. since the tile count is set above, we will reference that. d
        let comicsDoubled = doubleArray(characterComicURIs.slice(0,tileCount))
        // now that we have an array that contains the number of values we want, now it can be shuffled. 
        let shuffledURIs = shuffle(comicsDoubled)

        // this section assigns a bunch of variables, we then push each value into a tiles array to be poplulated in the GameTiles component.
        for (let i=0;i<tileCount;i++){
            let currentCharacterId = (this.props.characters && this.props.characters.id)
            let currentCharacter = (this.props.characters && this.props.characters.name)
            let currentBackgroundURI = shuffledURIs[i]
            // let defaultBackgroundImg = '/images/tileback.jpeg'
            let currentTile =  {
                tileId: `Tile${i+1}`, 
                currentCharacter: currentCharacter, 
                currentCharacterId: currentCharacterId, 
                currentBackgroundURI: currentBackgroundURI
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