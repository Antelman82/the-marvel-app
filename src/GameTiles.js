import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComics } from './store/characterSlice';
import Tile from './Tile'

function GameTiles({ characters }) {
  const dispatch = useDispatch();
  const { comic } = useSelector(state => state.character);

  useEffect(() => {
    dispatch(fetchComics('60151'));
  }, [dispatch]);

  return (
    <Tile characters={characters} comic={comic} />
  )
}

export default GameTiles