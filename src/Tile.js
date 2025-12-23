import React, { useState, useEffect, useRef } from 'react';
import { fetchComicAPI } from './api/realAPI';

function Tile({ characters }) {
  const [tiles, setTiles] = useState([]);
  const bgImg = '/images/tileback.jpeg';
  const [isLocked, setIsLocked] = useState(false);
  
  const firstTileRef = useRef(null);
  const secondTileRef = useRef(null);

  const createSVGFallback = (characterName) => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
    const hash = characterName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const color = colors[hash % colors.length];
    
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='${encodeURIComponent(color)}' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='32' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(characterName)}%3C/text%3E%3C/svg%3E`;
  };

  const setBackgroundImageWithFallback = (element, imageUrl, characterName) => {
    // Try to load the image with error handling
    const img = new Image();
    img.onerror = () => {
      console.warn(`Failed to load image: ${imageUrl}, using SVG fallback for ${characterName}`);
      const fallbackSvg = createSVGFallback(characterName);
      element.style.backgroundImage = `url("${fallbackSvg}")`;
    };
    img.onload = () => {
      element.style.backgroundImage = `url('${imageUrl}')`;
    };
    img.src = imageUrl;
  };

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
    // Prevent clicks while locked
    if (isLocked) {
      return;
    }
    
    // Prevent clicking the same tile twice
    if (firstTileRef.current && document.querySelector(`.${currentTile.tileId}`) === firstTileRef.current) {
      return;
    }

    let curTileClass = document.querySelector(`.${currentTile.tileId}`);
    console.log('Tile clicked:', currentTile.tileId);

    fetchComicAPI(currentTile.currentBackgroundURI)
      .then(response => {
        const comic = response.data.data.results[0];
        let imageUrl = comic.thumbnail.path;
        const imageExtension = comic.thumbnail.extension;

        if (imageExtension && !imageUrl.endsWith(imageExtension)) {
          imageUrl = `${imageUrl}.${imageExtension}`;
        }

        console.log('Comic data:', comic.title, 'Image URL:', imageUrl);

        // Display the image on the tile
        if (imageUrl.startsWith('data:')) {
          curTileClass.style.backgroundImage = `url("${imageUrl}")`;
        } else {
          setBackgroundImageWithFallback(curTileClass, imageUrl, comic.title);
        }
        curTileClass.style.backgroundSize = 'cover';
        curTileClass.style.backgroundPosition = 'center';
        curTileClass.style.border = '3px solid yellow';

        // First tile selected
        if (!firstTileRef.current) {
          console.log('First tile selected:', comic.title);
          firstTileRef.current = {
            element: curTileClass,
            uri: currentTile.currentBackgroundURI
          };
        }
        // Second tile selected
        else if (!secondTileRef.current) {
          console.log('Second tile selected:', comic.title);
          secondTileRef.current = {
            element: curTileClass,
            uri: currentTile.currentBackgroundURI
          };

          // Lock the board
          setIsLocked(true);

          // Check if tiles match
          const match = firstTileRef.current.uri === secondTileRef.current.uri;
          
          if (match) {
            console.log('Match found!');
            firstTileRef.current.element.style.pointerEvents = 'none';
            secondTileRef.current.element.style.pointerEvents = 'none';
            
            // Reset for next pair
            setTimeout(() => {
              console.log('Resetting after match');
              firstTileRef.current = null;
              secondTileRef.current = null;
              setIsLocked(false);
            }, 800);
          } else {
            console.log('No match, flipping back in 1 second');
            
            // Flip tiles back after delay
            setTimeout(() => {
              console.log('Flipping tiles back');
              firstTileRef.current.element.style.backgroundImage = `url('${bgImg}')`;
              firstTileRef.current.element.style.border = '0px';
              secondTileRef.current.element.style.backgroundImage = `url('${bgImg}')`;
              secondTileRef.current.element.style.border = '0px';
              
              // Reset refs and unlock
              firstTileRef.current = null;
              secondTileRef.current = null;
              setIsLocked(false);
            }, 1000);
          }
        }
      })
      .catch(error => {
        console.error('Error fetching comic image:', error);
      });
  };

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