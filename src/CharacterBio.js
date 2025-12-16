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
          {characters.thumbnail && (
            <img src={characters.thumbnail.extension ? 
              `${characters.thumbnail.path}.${characters.thumbnail.extension}` : 
              characters.thumbnail.path
            } alt={characters.name} />
          )}
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
        {characters.urls && characters.urls.length > 1 ? (
          <a className='bio-item wiki-link' href={`${characters.urls[1].url}`} >Click Here</a>
        ) : (
          <span className='bio-item'>N/A</span>
        )}
      </div>
    </div>
  );
}

export default CharacterBio;