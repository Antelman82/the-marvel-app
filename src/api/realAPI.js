import axios from 'axios';

// SuperHero API base URL and access token
// Note: You can get a free access token from https://superheroapi.com/
const SUPERHERO_API_BASE = 'https://superheroapi.com/api';
const SUPERHERO_ACCESS_TOKEN = 'b591ce4a485486fa53b8200d01a02c79';

// CORS Proxy - using api.allorigins.win which works without authentication
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

/**
 * Helper function to make CORS-enabled requests
 * @param {string} url - The API URL to fetch
 * @returns {Promise} - Promise that resolves with the data
 */
const fetchWithCORS = async (url) => {
  try {
    // Use CORS proxy to bypass browser CORS restrictions
    const encodedUrl = encodeURIComponent(url);
    const proxyUrl = `${CORS_PROXY}${encodedUrl}`;
    
    const response = await axios.get(proxyUrl);
    return response.data;
  } catch (error) {
    console.error('CORS fetch error:', error);
    throw error;
  }
};

/**
 * Fetches a character from the SuperHero API by name
 * @param {string} characterName - The name of the character to fetch
 * @returns {Promise} - Promise that resolves with character data
 */
export const fetchCharacterAPI = async (characterName = 'spider-man') => {
  try {
    // First, search for the character by name to get their ID
    const searchUrl = `${SUPERHERO_API_BASE}/${SUPERHERO_ACCESS_TOKEN}/search/${characterName}`;
    const searchData = await fetchWithCORS(searchUrl);

    if (searchData.results && searchData.results.length > 0) {
      const characterId = searchData.results[0].id;

      // Now fetch the full character data by ID
      const characterUrl = `${SUPERHERO_API_BASE}/${SUPERHERO_ACCESS_TOKEN}/${characterId}`;
      const characterData = await fetchWithCORS(characterUrl);

      // Transform SuperHero API response to match Marvel API format
      const character = transformCharacter(characterData);

      // Return in Marvel API format for compatibility
      return {
        data: {
          data: {
            results: [character]
          }
        }
      };
    } else {
      throw new Error(`Character "${characterName}" not found`);
    }
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};

/**
 * Fetches a comic/character image from SuperHero API
 * @param {string} characterIdOrName - The character ID or name
 * @returns {Promise} - Promise that resolves with image data
 */
export const fetchComicAPI = async (characterIdOrName = '332') => {
  try {
    let characterData;

    // If it's a number (character ID), fetch directly
    if (!isNaN(characterIdOrName)) {
      try {
        const characterUrl = `${SUPERHERO_API_BASE}/${SUPERHERO_ACCESS_TOKEN}/${characterIdOrName}`;
        characterData = await fetchWithCORS(characterUrl);
      } catch (error) {
        // If character ID not found, use Spider-Man as fallback
        console.warn(`Character ${characterIdOrName} not found, using fallback`);
        const fallbackUrl = `${SUPERHERO_API_BASE}/${SUPERHERO_ACCESS_TOKEN}/620`; // Spider-Man
        characterData = await fetchWithCORS(fallbackUrl);
      }
    } else {
      // It's a name, search for it
      const searchUrl = `${SUPERHERO_API_BASE}/${SUPERHERO_ACCESS_TOKEN}/search/${characterIdOrName}`;
      const searchData = await fetchWithCORS(searchUrl);
      
      if (searchData.results && searchData.results.length > 0) {
        const characterId = searchData.results[0].id;
        const characterUrl = `${SUPERHERO_API_BASE}/${SUPERHERO_ACCESS_TOKEN}/${characterId}`;
        characterData = await fetchWithCORS(characterUrl);
      } else {
        throw new Error(`Character not found`);
      }
    }

    // Transform to match Marvel API comic format
    const comic = {
      id: characterData.id,
      title: characterData.name,
      description: characterData.biography?.['publisher'] || 'Superhero',
      thumbnail: {
        // Return the raw image URL - Tile component will handle proxying
        path: characterData.image?.url || '/images/tileback.jpeg',
        extension: ''
      }
    };

    return {
      data: {
        data: {
          results: [comic]
        }
      }
    };
  } catch (error) {
    console.error('Error fetching comic:', error);
    // Return a fallback response instead of throwing
    return {
      data: {
        data: {
          results: [{
            id: 'unknown',
            title: 'Unknown',
            description: 'Unable to load comic data',
            thumbnail: {
              path: '/images/tileback',
              extension: 'jpeg'
            }
          }]
        }
      }
    };
  }
};

/**
 * Transform SuperHero API response to Marvel API format
 * This allows us to use the same components without changes
 */
function transformCharacter(superheroData) {
  // Create a list of popular related character IDs for the game
  // These are real character IDs from SuperHero API
  const relatedCharacterIds = [
    superheroData.id,
    superheroData.id,
    superheroData.id,
    superheroData.id,
    superheroData.id,
    superheroData.id,
    superheroData.id,
    superheroData.id,
    superheroData.id,
    superheroData.id
  ];

  return {
    id: superheroData.id,
    name: superheroData.name,
    description: superheroData.biography?.['full-name'] || superheroData.name,
    thumbnail: {
      // Return the raw image URL - Tile component will handle proxying
      path: superheroData.image?.url || '/images/tileback.jpeg',
      extension: ''
    },
    comics: {
      available: 10,
      items: relatedCharacterIds.map(id => ({ resourceURI: id }))
    },
    urls: [
      {
        type: 'detail',
        url: `https://superheroapi.com/api/${SUPERHERO_ACCESS_TOKEN}/${superheroData.id}`
      },
      {
        type: 'wiki',
        url: `https://superheroapi.com/api/${SUPERHERO_ACCESS_TOKEN}/${superheroData.id}`
      }
    ],
    biography: superheroData.biography || {},
    appearance: superheroData.appearance || {},
    powerstats: superheroData.powerstats || {}
  };
}
