import React from 'react';
import './App.css';

function CharacterBio({ characters }) {
  return (
    <div className='bio-container'>
      <div className='aside-header'>BIO</div>
      <div className="char-name">
        <h3 className='bio-item'>{`Name:  `}</h3>
        <div className='bio-item name'>{characters.name}</div>
      </div>
      <div className="char-thumb">
        <div className='bio-item'>
          <img src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`} alt='' />
        </div>
      </div>
      <div className="char-description">
        <h3 className='bio-item'>Description: </h3>
        <div className='bio-item'>{characters.description}</div>
      </div>
      <div className="char-name">
        <h3 className='bio-item'>#of Comics:&nbsp;&nbsp;</h3>
        <div className='bio-item'>{characters.comics.available}</div>
      </div>
      <div className="char-name">
        <h3 className='bio-item'>Wiki:</h3>
        <a className='bio-item wiki-link' href={`${characters.urls[1].url}`} >Click Here</a>
      </div>
    </div>
  );
}

export default CharacterBio;