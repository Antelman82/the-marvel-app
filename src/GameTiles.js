import React, { Component } from 'react';

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


    render(){
        console.log('GameTiles Component')

        let tiles = []

        for (let i=0;i<20;i++){
            let currentTile =  `Tile${i+1}`
            tiles.push(
                <div className='tile' key={i} onClick={() => this.handleClick(currentTile)}>
                    {currentTile}
                    <p>{`Character Name${i+1}`}</p>
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