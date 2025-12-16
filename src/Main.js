import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacter } from './store/characterSlice';

import GameTiles from './GameTiles'
import CharacterBio from './CharacterBio'

function Main() {
  const dispatch = useDispatch();
  const { characters, apiDataLoaded } = useSelector(state => state.character);

  useEffect(() => {
    dispatch(fetchCharacter('Spider-Man'));
  }, [dispatch]);

  const defaultBackgroundImg = `/images/Marvel-Wallpaper-HD-backgrounds-Wonderful.jpeg`;

  return (
    <main className='main'
      style={{
        backgroundImage: `url(${defaultBackgroundImg})`,
        backgroundSize: `cover`,
        backgroundPosition: `center center`
      }}>

      <div className='partition'>
        <div className='flex-container'>
          {apiDataLoaded && <GameTiles characters={characters} />}
        </div>
        <aside className=''>
          {apiDataLoaded && <CharacterBio characters={characters} />}
        </aside>
      </div>
    </main>
  )
}

export default Main;