import React, { useState, useEffect } from 'react';
import { fetchComicAPI } from './api/mockAPI';

function Tile({ characters }) {
  const [tiles, setTiles] = useState([]);
  const [bgImg] = useState('/images/tileback.jpeg');
  const [previousPicked, setPreviousPicked] = useState(null);
  const [previousBackgroundImg, setPreviousBackgroundImg] = useState('');
  const [currentPicked, setCurrentPicked] = useState(null);
  const [currentBackgroundImg, setCurrentBackgroundImg] = useState('');
  const [counter, setCounter] = useState(0);

  const doubleArray = (array) => {
    let tempArray = []
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < 2; j++) {
        tempArray.push(array[i])
      }
    }
    return tempArray
  }

  const shuffle = (array) => {
    let m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  const handleClick = (currentTile) => {
    console.log(counter)
    setCounter(counter + 1)
    let curTileClass = document.querySelector(`.${currentTile.tileId}`)
    console.log(curTileClass);
    fetchComicAPI(currentTile.currentBackgroundURI)
      .then(response => {
        currentTile.currentBackgroundImg = `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`
        if (counter === 3) {
          if (currentBackgroundImg === previousBackgroundImg) {
            previousPicked.style.pointerEvents = `none`
            curTileClass.style.pointerEvents = `none`
            setCurrentPicked(null)
            setPreviousPicked(null)
            setCurrentBackgroundImg(null)
            setPreviousBackgroundImg(null)
            setCounter(0)
          }
          else {
            console.log(counter)
            console.log("both picked but don't match")
            console.log(previousPicked)
            previousPicked.style.backgroundImage = `url('${bgImg}')`
            curTileClass.style.backgroundImage = `url('${bgImg}')`
            setCurrentPicked(null)
            setPreviousPicked(null)
            setCurrentBackgroundImg(null)
            setPreviousBackgroundImg(null)
            setCounter(0)
          }
        } else if (currentPicked === null && counter <= 2) {
          curTileClass.style.backgroundImage = `url('${currentTile.currentBackgroundImg}')`
          setCurrentPicked(curTileClass)
          setCurrentBackgroundImg(currentTile.currentBackgroundImg)
        }
        else if (currentPicked !== null && previousPicked === null && counter <= 2) {
          curTileClass.style.backgroundImage = `url('${currentTile.currentBackgroundImg}')`
          setCurrentPicked(curTileClass)
          setCurrentBackgroundImg(currentTile.currentBackgroundImg)
          setPreviousPicked(currentPicked)
          setPreviousBackgroundImg(currentBackgroundImg)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    let tiles = []
    let tileCount = 20
    const characterComicURIs = characters.comics.items.map((cover) => {
      return cover.resourceURI
    })
    let comicsDoubled = doubleArray(characterComicURIs.slice(0, tileCount / 2))
    let shuffledURIs = shuffle(comicsDoubled)
    for (let i = 0; i < tileCount; i++) {
      let currentCharacterId = (characters && characters.id)
      let currentCharacter = (characters && characters.name)
      let currentBackgroundURI = shuffledURIs[i]
      let currentTile = {
        tileId: `Tile${i + 1}`,
        currentCharacter: currentCharacter,
        currentCharacterId: currentCharacterId,
        currentBackgroundURI: currentBackgroundURI
      }
      tiles.push(
        <div key={`Tile${i + 1}`} className='flex-cell'>
          <div
            id={`Tile${i + 1}`}
            className={`flex-item ${currentTile.tileId}`}
            onClick={() => handleClick(currentTile)}
            style={{
              backgroundImage: `url(${bgImg})`
            }}
          >
          </div>
        </div>
      )
    }
    setTiles(tiles)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characters, bgImg])

  return (
    <>
      {tiles}
    </>
  )
}

export default Tile;