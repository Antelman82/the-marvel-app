import React, { Component } from 'react';
import './App.css';

class CharacterBio extends Component {

  render(){
    console.log('CharacterBio Component')
    
    return (
        <div>BIO
            <div className="char-name">
                <h3 className='bio-item'>{`Name:`}</h3>
                <div className='bio-item'>{this.props.characters.name}</div>
            </div>
            <div className="char-thumb">
                <div className='bio-item'>
                    <img src={`${this.props.characters.thumbnail.path}.${this.props.characters.thumbnail.extension}`} alt='' />
                </div>
            </div>
            <div className="char-name">
                <h3 className='bio-item'>#of Comics:</h3>
                    <div className='bio-item'>{this.props.characters.comics.available}</div>
            </div>
            <div className="char-name">
                <h3 className='bio-item'>Wiki:</h3>
                    <a className='bio-item' href={`${this.props.characters.urls[1].url}`} >Click Here</a>
            </div>
        </div>
    );
  }
}

export default CharacterBio;

// name: "Ant-Man (Scott Lang)"
// thumbnail:
//     path: "http://i.annihil.us/u/prod/marvel/i/mg/e/20/52696868356a0"
//     extension: "jpg"
// available: 113
// urls: Array(3)
// 0: {type: "detail", url: "http://marvel.com/comics/characters/1010801/ant-ma…piRef&utm_source=5139be72ea6869ccf8846bbbe6b562ea"}
// 1: {type: "wiki", url: "http://marvel.com/universe/Ant-Man_(Scott_Lang)?ut…piRef&utm_source=5139be72ea6869ccf8846bbbe6b562ea"}
// 2: {type: "comiclink", url: "http://marvel.com/comics/characters/1010801/ant-ma…piRef&utm_source=5139be72ea6869ccf8846bbbe6b562ea"}