import React, { Component } from 'react';
// import { isCompositeComponent } from 'react-dom/test-utils';
import Axios from 'axios'
import ReactDOM from 'react-dom';

class Tile extends Component {

    state = {
        bgImg: '/images/tileback.jpeg',
        previousPicked: null,
        previousBackgroundImg: '',
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
    // handleClick = (currentTile) => {
    //     console.log('handleClick')
    //     console.log(currentTile)
    //     // console.log(this.state.previousPicked)
    //     let curTileClass = document.querySelector(`.${currentTile.tileId}`)
    //     console.log(curTileClass)
    //     let prevTileClass = document.querySelector(`.${this.state.previousPicked}`)
    //     console.log(prevTileClass)
    //     // this.setState([
    //     //     currentBackgroundImg: c
    //     // ])
    //     // console.log(currentTile.currentBackgroundURI)
    //     Axios({
    //         method: 'GET',
    //         url: `${currentTile.currentBackgroundURI}?&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80`,
    //     })
    //     .then(response => {
    //         console.log(`tile axios response`)
    //         // currentTile.currentBackgroundImg = `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`
    //         // currentTile.currentBackgroundImg = `http://i.annihil.us/u/prod/marvel/i/mg/d/00/4bc69f37df47b.jpg`
    //         // console.log(currentTile.currentBackgroundImg)
    //         // console.log(this.state.currentBackgroundImg)
    //         // this.setState({
    //         //     currentBackgroundImg: response.data.data.results[0].thumbnail && `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`
    //         // })
    //         // console.log(this.state.currentBackgroundImg)
    //         const currentBackgroundImg = response.data.data.results[0].thumbnail.path
    //         this.setState({ 
    //         currentBackgroundImg: `${currentBackgroundImg}.${response.data.data.results[0].thumbnail.extension}`,
    //         apiDataLoaded: true
    //         })
    //     })
    //     .catch(error => {
    //         console.log(error)
    //         this.setState({
    //         error,
    //         apiDataLoaded: false
    //         })
    //     })    

    //     // if (this.state.previousPicked == null){
    //     //     // set the last tile picked to previous tile, and set the current as the new current tile.
    //     //     this.setState({
    //     //         previousPicked: this.state.currentPicked,
    //     //         previousBackgroundImg: this.state.currentBackgroundImg,
    //     //         currentPicked: curTileClass
    //     //     })
    //         console.log(this.state)
    //         //this is the flip logic here
    //         // checks if the tile is currently the background.
    //         if (curTileClass.style.backgroundImage === 'url("/images/tileback.jpeg")'){
    //             console.log('updating background image')
    //             console.log(this.state)
    //             curTileClass.style.backgroundImage = `url("${this.state.currentBackgroundImg}")`
    //             // curTileClass.style.backgroundImage = `url('/images/sample-iron-man.jpg')`
    //             this.setState({

    //             })
    //         } else {
    //             curTileClass.style.backgroundImage = `url('/images/tileback.jpeg')`
            // }
            // console.log('flip current image')
            // this.setState({ 
            //     currentPicked: currentTile.tileId 
            // })
            // console.log(`previousPicked to ${currentTile.tileId}`)
        // }
        // else {
        //     //this is what happens if there are more than one in the
        //     if (curTileClass.style.backgroundImage === 'url("/images/tileback.jpeg")'){
        //         curTileClass.style.backgroundImage = `url('${this.state.currentBackgroundImg}')`
        //     } else {
        //         curTileClass.style.backgroundImage = `url('/images/tileback.jpeg')`
        //     }

            //////////////////////////////////////
            /////////////////////////////////////
            //do I need to move this logic to the render? it doesn't seem to update on the page when it happens, but only after I click the next tile.
            // if two tiles have been flipped, this checks if they match. 
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
        // }
            
   // }        
    // There will need to be a second handle click for a new button(div) that will contain an "INFO" icon in the corner that will trigger the BIO of the character. BUT ONLY WHEN IT'S FLIPPED OVER!
    handleClick = (currentTile) => {
        let curTileClass = document.querySelector(`.${currentTile.tileId}`)
        // let prevTileClass = this.state.previousPicked !== null ? document.querySelector(`#${this.state.previousPicked}`) : null
        let prevTileClass = document.querySelector(`#${this.state.previousPicked}`)
        console.log(curTileClass);
        console.log(prevTileClass);
        Axios({
            method: 'GET',
            url: `${currentTile.currentBackgroundURI}?&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80`,
        })
        .then(response => {
            currentTile.currentBackgroundImg = `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`
            if (this.state.currentPicked === null) {
                console.log('current picked is null')
                // console.log(currentTile.currentBackgroundImg)
                curTileClass.style.backgroundImage = `url('${currentTile.currentBackgroundImg}')`
                this.setState({
                //   previousPicked: this.state.currentPicked,
                //   previousBackgroundImg: this.state.currentBackgroundImg,
                  currentPicked: curTileClass,
                  currentBackgroundImg: currentTile.currentBackgroundImg
                })
                console.log(this.state)
            }
            else if (this.state.currentPicked !== null && this.state.previousPicked === null){
                    console.log('currentPicked is not null, and previous is null.')
                    curTileClass.style.backgroundImage = `url('${currentTile.currentBackgroundImg}')`
                    this.setState({
                    currentPicked: curTileClass,
                    currentBackgroundImg: currentTile.currentBackgroundImg,
                    previousPicked: this.state.currentPicked,
                    previousBackgroundImg: this.state.currentBackgroundImg
                    })
                    console.log(this.state)
                    if (this.state.currentBackgroundImg === this.state.previousBackgroundImg){
                        console.log("both picked match")
                        let previousPicked = this.state.previousPicked
                        previousPicked.style.pointerEvents = `none`
                        curTileClass.style.pointerEvents = `none`
                        this.setState({
                            currentPicked: null,
                            previousPicked: null,
                            currentBackgroundImg: null,
                            previousBackgroundImg: null
                        })
                    } 
                    else {
                        console.log(this.state)
                        console.log("both picked but don't match")
                        console.log(this.state.previousPicked)
                        let previousPicked = this.state.previousPicked
                        console.log(previousPicked)
                        previousPicked.style.backgroundImage = `url('${this.state.bgImg}')`
                        curTileClass.style.backgroundImage = `url('${this.state.bgImg}')`
                        this.setState({
                            currentPicked: null,
                            previousPicked: null,
                            currentBackgroundImg: null,
                            previousBackgroundImg: null
                        })
                    } 
                    
                }
                // console.log('update previous pick')
                // console.log(this.state)
                // if (curTileClass.style.backgroundImage === 'url("/images/tileback.jpeg")'){
                //     console.log('current background image is tileback')
                //   curTileClass.style.backgroundImage = `url('${this.state.currentBackgroundImg}')`
                // }
                // this.setState({
                //   currentPicked: currentTile.tileId,
                //   currentBackgroundImg: currentTile.currentBackgroundImg
                // })
            // }
                // else {
                //     if (this.state.currentBackgroundImg === this.state.previousBackgroundImg) {
                //         console.log('YOU WON!');
                //         this.setState({
                //             currentPicked: null,
                //             previousPicked: null
                //         })
                //     console.log('you lost')
                //     let prevTileClass = document.querySelector(`#${this.state.previousPicked}`)
                //     console.log(prevTileClass)
                //     let curTileClass = document.querySelector(`#${this.state.currentPicked}`)
                //     console.log(curTileClass)
                //     console.log(this.state)
                    

                        // curTileClass.style.backgroundImage = 'url("/images/tileback.jpeg")'
                    //     // prevTileClass.backgroundImage = '/images/tileback.jpeg';
                        // curTileClass.style.backgroundImage = 'url("/images/tileback.jpeg")'
                    //     prevTileClass.style.backgroundImage = 'url("/images/tileback.jpeg")'
            //             this.setState({
            //               currentPicked: null,
            //               previousPicked: null
            //             })
            //     }
            //     console.log(prevTileClass)
            //     console.log(curTileClass)

            //     this.setState({
            //         currentPicked: null,
            //         previousPicked: null
            //       })
            // } 
            // let prevTileClass = document.querySelector(`#${this.state.previousPicked}`)
            // console.log(prevTileClass)
            // let curTileClass = document.querySelector(`#${this.state.currentPicked}`)
            // console.log(curTileClass)
            // if (
            //     this.state.previousPicked === null && 
            //     this.state.currentPicked === null && 
            //     this.state.currentBackgroundImg !== this.state.previousBackgroundImg) {
            //     console.log("don't match, and both not null")
            // }
            // else {
            // //   console.log(currentTile, this.state.previousPicked);
            //   if (this.state.currentBackgroundImg === this.state.previousBackgroundImg) {
            //     console.log('YOU WON!');
            //   } else {
            //     curTileClass.backgroundImage = '/images/tileback.jpeg';
            //     prevTileClass.backgroundImage = '/images/tileback.jpeg';
            //     this.setState({
            //       currentPicked: null,
            //       previousPicked: null
            //     })
            //   }
            // }
        })
        .catch(error => {
            console.log(error)
        })
    }
    

    doubleArray = (array) => {
        let tempArray = []
        for (let i=0;i<array.length;i++){
            for (let j=0;j<2;j++){
                tempArray.push(array[i])
            }
        }
        return tempArray
    }
    shuffle = (array) => {
        let m = array.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
    }
    componentDidMount(){
        let tiles = []
        let tileCount = 20
        const characterComicURIs = this.props.characters.comics.items.map((cover) => {
            return cover.resourceURI
        })
        // console.log(characterComicURIs)
        let comicsDoubled = this.doubleArray(characterComicURIs.slice(0,tileCount/2))
        let shuffledURIs = this.shuffle(comicsDoubled)
        for (let i=0;i<tileCount;i++){
            let currentCharacterId = (this.props.characters && this.props.characters.id)
            let currentCharacter = (this.props.characters && this.props.characters.name)
            let currentBackgroundURI = shuffledURIs[i]
            let currentTile =  {
                tileId: `Tile${i+1}`,
                currentCharacter: currentCharacter,
                currentCharacterId: currentCharacterId,
                currentBackgroundURI: currentBackgroundURI
            }
            tiles.push(
                <div key={`Tile${i+1}`} className='flex-cell'>
                    <div
                        id={`Tile${i+1}`}
                        className={`flex-item ${currentTile.tileId}`}
                        onClick={() => this.handleClick(currentTile)}
                        style={{
                            backgroundImage:  `url(${this.state.bgImg})`
                        }}
                        >
                    </div>
                </div>
            )
            this.setState({
              tiles
            })
        }
    }

    render(){
        
        return(
            <>
                {this.state.tiles}
            </>
        )
    }
}        
export default Tile;