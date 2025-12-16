import { mockCharacters, mockComics } from './mockData';

/**
 * Simulates fetching a character from the Marvel API
 * In production, this would call the real Marvel API
 * @param {string} characterName - The name of the character to fetch
 * @returns {Promise} - Promise that resolves with character data
 */
export const fetchCharacterAPI = async (characterName = 'Spider-Man') => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      const key = characterName.toLowerCase();
      const character = mockCharacters[key];
      
      if (character) {
        // Simulate Marvel API response structure
        resolve({
          data: {
            data: {
              results: [character]
            }
          }
        });
      } else {
        // Return Spider-Man as default if character not found
        resolve({
          data: {
            data: {
              results: [mockCharacters['spider-man']]
            }
          }
        });
      }
    }, 500); // 500ms delay to simulate network latency
  });
};

/**
 * Simulates fetching a comic from the Marvel API
 * In production, this would call the real Marvel API
 * @param {string} comicId - The ID of the comic to fetch
 * @returns {Promise} - Promise that resolves with comic data
 */
export const fetchComicAPI = async (comicId = '15997') => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      const comic = mockComics[comicId];
      
      if (comic) {
        // Simulate Marvel API response structure
        resolve({
          data: {
            data: {
              results: [comic]
            }
          }
        });
      } else {
        // Return a random comic if not found
        const comicIds = Object.keys(mockComics);
        const randomId = comicIds[Math.floor(Math.random() * comicIds.length)];
        resolve({
          data: {
            data: {
              results: [mockComics[randomId]]
            }
          }
        });
      }
    }, 300); // 300ms delay to simulate network latency
  });
};
