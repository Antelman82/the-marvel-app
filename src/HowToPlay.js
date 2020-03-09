import React, { Component } from 'react';


class HowToPlay extends Component {
    render(){
        console.log('HowToPlay Component Render')

        return(
            <div className='how-to-play'>
                <h2>How to play Page</h2>
                <ol>
                    <li>Turn over any two cards.</li>
                    <li>If the two cards match, they stay flipped</li>
                    <li>If they don't match, game will turn them back over</li>
                    <li>Remember what was on each card and where it was</li>
                    <li>The game is over when all the cards have been matched</li>
                    <li>The player with the most matches wins</li>
                </ol>
            </div>

        )
    }
}

export default HowToPlay