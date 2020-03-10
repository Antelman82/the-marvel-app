import React, { Component } from 'react';
import './App.css';

class CharacterBio extends Component {

  render(){
    return (
        <div className='bio-container'>
            <div className='aside-header'>BIO</div>
            <div className="char-name">
                <h3 className='bio-item'>{`Name:  `}</h3>
                <div className='bio-item name'>{this.props.characters.name}</div>
            </div>
            <div className="char-thumb">
                <div className='bio-item'>
                    <img src={`${this.props.characters.thumbnail.path}.${this.props.characters.thumbnail.extension}`} alt='' />
                </div>
            </div>
            <div className="char-description">
                <h3 className='bio-item'>Description: </h3>
                    <div className='bio-item'>{this.props.characters.description}</div>
            </div>
            <div className="char-name">
                <h3 className='bio-item'>#of Comics:&nbsp;&nbsp;</h3>
                    <div className='bio-item'>{this.props.characters.comics.available}</div>
            </div>
            <div className="char-name">
                <h3 className='bio-item'>Wiki:</h3>
                    <a className='bio-item wiki-link' href={`${this.props.characters.urls[1].url}`} >Click Here</a>
            </div>
        </div>
    );
  }
}

export default CharacterBio;