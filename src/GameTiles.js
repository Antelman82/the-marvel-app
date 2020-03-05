import React, { Component } from 'react';

class GameTiles extends Component {


    render(){
        console.log('GameTiles Component')

        let tiles = []

        for (let i=0;i<=10;i++){
            tiles.push(
                <div className='tile' key={i}>
                    {`Tile${i}`}
                    <p>{`Character Name${i}`}</p>
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