import React, { useState, useEffect } from 'react';
import { fetchComicAPI } from './api/realAPI';

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
    console.log('Tile clicked:', currentTile.tileId, 'Counter:', counter)
    setCounter(counter + 1)
    let curTileClass = document.querySelector(`.${currentTile.tileId}`)
    console.log('Tile element:', curTileClass);
    
    fetchComicAPI(currentTile.currentBackgroundURI)
      .then(response => {
        const comic = response.data.data.results[0];
        let imageUrl = comic.thumbnail.path;
        
        console.log('Comic data:', comic);
        console.log('Image path from API:', imageUrl);
        
        // Handle image loading with CORS proxy
        const loadImageWithProxy = async () => {
          try {
            if (imageUrl && imageUrl.startsWith('http') && !imageUrl.includes('api.allorigins.win')) {
              // For SuperHero API images, fetch as blob through CORS proxy and convert to data URL
              const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
              const proxyUrl = `${CORS_PROXY}${encodeURIComponent(imageUrl)}`;
              
              console.log('Fetching image from proxy:', proxyUrl);
              const response = await fetch(proxyUrl);
              if (!response.ok) throw new Error('Failed to load image');
              
              const blob = await response.blob();
              const objectUrl = URL.createObjectURL(blob);
              console.log('Created object URL from blob:', objectUrl);
              
              return objectUrl;
            } else if (imageUrl && imageUrl.startsWith('/')) {
              // Local image path
              return imageUrl;
            } else {
              // Use the URL as-is
              return imageUrl;
            }
          } catch (error) {
            console.error('Error loading image:', error);
            // Fallback to the original URL
            return imageUrl;
          }
        };
        
        loadImageWithProxy().then(finalImageUrl => {
          console.log('Using image URL:', finalImageUrl);
          currentTile.currentBackgroundImg = finalImageUrl;
          
          if (counter === 3) {
            if (currentBackgroundImg === previousBackgroundImg) {
              console.log('Match found!');
              previousPicked.style.pointerEvents = `none`
              curTileClass.style.pointerEvents = `none`
              setCurrentPicked(null)
              setPreviousPicked(null)
              setCurrentBackgroundImg(null)
              setPreviousBackgroundImg(null)
              setCounter(0)
            }
            else {
              console.log("No match, flipping back");
              previousPicked.style.backgroundImage = `url('${bgImg}')`
              previousPicked.style.border = '0px solid yellow'
              curTileClass.style.backgroundImage = `url('${bgImg}')`
              curTileClass.style.border = '0px solid yellow'
              setCurrentPicked(null)
              setPreviousPicked(null)
              setCurrentBackgroundImg(null)
              setPreviousBackgroundImg(null)
              setCounter(0)
            }
          } else if (currentPicked === null && counter <= 2) {
            console.log('First tile selected:', comic.title);
            curTileClass.style.backgroundImage = `url('${finalImageUrl}')`
            curTileClass.style.backgroundSize = 'cover';
            curTileClass.style.backgroundPosition = 'center';
            curTileClass.style.border = '3px solid yellow';
            setCurrentPicked(curTileClass)
            setCurrentBackgroundImg(finalImageUrl)
          }
          else if (currentPicked !== null && previousPicked === null && counter <= 2) {
            console.log('Second tile selected:', comic.title);
            curTileClass.style.backgroundImage = `url('${finalImageUrl}')`
            curTileClass.style.backgroundSize = 'cover';
            curTileClass.style.backgroundPosition = 'center';
            curTileClass.style.border = '3px solid yellow';
            setCurrentPicked(curTileClass)
            setCurrentBackgroundImg(finalImageUrl)
            setPreviousPicked(currentPicked)
            setPreviousBackgroundImg(currentBackgroundImg)
          }
        });
      })
      .catch(error => {
        console.error('Error fetching comic image:', error)
      })
  }

  useEffect(() => {
    if (!characters || !characters.comics || !characters.comics.items) {
      console.warn('Characters or comics data not available');
      return;
    }

    let tiles = []
    let tileCount = 20
    const characterComicURIs = characters.comics.items.map((cover) => {
      return cover.resourceURI
    })
    
    // If we don't have enough items, duplicate them
    let comicsToUse = characterComicURIs.length > 0 ? characterComicURIs : [characters.id];
    let comicsDoubled = doubleArray(comicsToUse.slice(0, Math.max(1, tileCount / 2)))
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