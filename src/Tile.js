import React, { Component } from 'react';
// import { isCompositeComponent } from 'react-dom/test-utils';
import Axios from 'axios'
import ReactDOM from 'react-dom';
import { isCompositeComponent } from 'react-dom/test-utils';

class Tile extends Component {

    state = {
        bgImg: '/images/tileback.jpeg',
        previousPicked: null,
        previousBackgroundImg: '',
        currentPicked: null,
        currentBackgroundImg: '',
        counter: 0
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

    handleClick = (currentTile) => {
        console.log(this.state.counter)
        this.setState({
            counter: this.state.counter+1
        })
        let curTileClass = document.querySelector(`.${currentTile.tileId}`)
        // let prevTileClass = this.state.previousPicked !== null ? document.querySelector(`#${this.state.previousPicked}`) : null
        // let prevTileClass = document.querySelector(`#${this.state.previousPicked}`)
        console.log(curTileClass);
        // console.log(prevTileClass);
        Axios({
            method: 'GET',
            url: `${currentTile.currentBackgroundURI}?&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80`,
        })
        .then(response => {
            currentTile.currentBackgroundImg = `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`
            if (this.state.counter === 3) {
                if (this.state.currentBackgroundImg === this.state.previousBackgroundImg){
                    console.log("both picked match")
                    let previousPicked = this.state.previousPicked
                    previousPicked.style.pointerEvents = `none`
                    curTileClass.style.pointerEvents = `none`
                    this.setState({
                        currentPicked: null,
                        previousPicked: null,
                        currentBackgroundImg: null,
                        previousBackgroundImg: null,
                        counter: 0
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
                    // previousPicked.style.pointerEvents = `auto`
                    // curTileClass.style.pointerEvents = `auto`
                    this.setState({
                        currentPicked: null,
                        previousPicked: null,
                        currentBackgroundImg: null,
                        previousBackgroundImg: null,
                        counter: 0
                    })
                }
            } else if (this.state.currentPicked === null && this.state.counter <= 2 ) {
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
            else if (this.state.currentPicked !== null && this.state.previousPicked === null && this.state.counter <= 2 ){
                    console.log('currentPicked is not null, and previous is null.')
                    curTileClass.style.backgroundImage = `url('${currentTile.currentBackgroundImg}')`
                    this.setState({
                    currentPicked: curTileClass,
                    currentBackgroundImg: currentTile.currentBackgroundImg,
                    previousPicked: this.state.currentPicked,
                    previousBackgroundImg: this.state.currentBackgroundImg
                    })
                    console.log(this.state)
                    
                    // else {
                    //     console.log(this.state)
                    //     console.log("both picked but don't match")
                    //     console.log(this.state.previousPicked)
                    //     let previousPicked = this.state.previousPicked
                    //     console.log(previousPicked)
                    //     previousPicked.style.backgroundImage = `url('${this.state.bgImg}')`
                    //     curTileClass.style.backgroundImage = `url('${this.state.bgImg}')`
                    //     this.setState({
                    //         currentPicked: null,
                    //         previousPicked: null,
                    //         currentBackgroundImg: null,
                    //         previousBackgroundImg: null
                    //     })
                    // } 
                    
                }

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