import React, { Component } from 'react';
import Axios from 'axios'


class Tile extends Component {

    state = {
        bgImg: '/images/tileback.jpeg',
        previousPicked: null,
        previousBackgroundImg: '',
        currentPicked: null,
        currentBackgroundImg: '',
        counter: 0
    }

    handleClick = (currentTile) => {
        console.log(this.state.counter)
        this.setState({
            counter: this.state.counter+1
        })
        let curTileClass = document.querySelector(`.${currentTile.tileId}`)
        console.log(curTileClass);
        Axios({
            method: 'GET',
            url: `${currentTile.currentBackgroundURI}?&apikey=5139be72ea6869ccf8846bbbe6b562ea&ts=1583344448559&hash=dbb36e239882ffd022ece2a7987cbe80`,
        })
        .then(response => {
            currentTile.currentBackgroundImg = `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`
            if (this.state.counter === 3) {
                if (this.state.currentBackgroundImg === this.state.previousBackgroundImg){
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
                    this.setState({
                        currentPicked: null,
                        previousPicked: null,
                        currentBackgroundImg: null,
                        previousBackgroundImg: null,
                        counter: 0
                    })
                }
            } else if (this.state.currentPicked === null && this.state.counter <= 2 ) {
                curTileClass.style.backgroundImage = `url('${currentTile.currentBackgroundImg}')`
                this.setState({
                  currentPicked: curTileClass,
                  currentBackgroundImg: currentTile.currentBackgroundImg
                })
            }
            else if (this.state.currentPicked !== null && this.state.previousPicked === null && this.state.counter <= 2 ){
                    curTileClass.style.backgroundImage = `url('${currentTile.currentBackgroundImg}')`
                    this.setState({
                    currentPicked: curTileClass,
                    currentBackgroundImg: currentTile.currentBackgroundImg,
                    previousPicked: this.state.currentPicked,
                    previousBackgroundImg: this.state.currentBackgroundImg
                    })
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