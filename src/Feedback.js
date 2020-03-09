import React, { Component } from 'react';

class Feedback extends Component {
    render(){
        console.log('Feedback Component Render')

        return(
            <div className='feedback'>
                <h2>Feedback Page</h2>
                <ol>
                    <li>Tell me what you think</li>
                </ol>
            </div>
        )
    }
}

export default Feedback