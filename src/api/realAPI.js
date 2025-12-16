import axios from 'axios';

// Local backend server URL
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/api';

/**
 * Fetches a character from the local backend
 * @param {string} characterName - The name of the character to fetch
 * @returns {Promise} - Promise that resolves with character data
 */
export const fetchCharacterAPI = async (characterName = 'spider-man') => {
  try {
    const response = await axios.get(`${BACKEND_URL}/character/${characterName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};

/**
 * Fetches a comic/character image from the local backend
 * @param {string} characterIdOrName - The character ID or name
 * @returns {Promise} - Promise that resolves with image data
 */
export const fetchComicAPI = async (characterIdOrName = '1') => {
  try {
    const response = await axios.get(`${BACKEND_URL}/comic/${characterIdOrName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comic:', error);
    // Return a fallback response
    return {
      data: {
        data: {
          results: [{
            id: 'unknown',
            title: 'Unknown Character',
            description: 'Unable to load',
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
              extension: ''
            }
          }]
        }
      }
    };
  }
};
