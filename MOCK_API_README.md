# Mock API Setup

## Overview
The Marvel API has been deprecated. This project now uses a **simulated backend API** that mimics the Marvel API response structure.

## Mock API Files

### 1. `src/api/mockData.js`
Contains mock character and comic data:
- **mockCharacters**: Character data (Spider-Man) with:
  - Basic info (id, name, description)
  - Thumbnail images
  - Comics list with resource URIs
  - Wiki and detail URLs

- **mockComics**: Comic data with:
  - Id and title
  - Thumbnail images
  - Descriptions

### 2. `src/api/mockAPI.js`
Provides API functions that simulate network requests:

**`fetchCharacterAPI(characterName)`**
- Simulates fetching character data
- Returns character object in Marvel API format
- Has 500ms simulated network delay

**`fetchComicAPI(comicId)`**
- Simulates fetching comic data
- Returns comic object in Marvel API format
- Has 300ms simulated network delay

## Integration Points

### Redux Store (`src/store/characterSlice.js`)
- Uses `fetchCharacterAPI()` in `fetchCharacter` thunk
- Uses `fetchComicAPI()` in `fetchComics` thunk

### Components

**Main.js**
- Calls `fetchCharacter()` on mount to load character data

**Tile.js**
- Calls `fetchComicAPI()` when user clicks a tile
- Gets comic images from mock data

## How to Extend

To add more characters or comics:

1. **Add to `src/api/mockData.js`**:
   ```javascript
   export const mockCharacters = {
     'spider-man': { ... },
     'iron-man': { ... }, // Add new character
   };
   ```

2. **Update `mockAPI.js`** to handle the new character name

## Switching to Real API

When the Marvel API is available again, simply:

1. Update `src/api/mockAPI.js` to make real HTTP requests
2. Or create a new `realAPI.js` and swap the imports
3. Keep the same function signatures for compatibility

## Sample Data Structure

The mock data follows Marvel API v1 structure:

```javascript
{
  id: 1009610,
  name: 'Spider-Man',
  description: '...',
  thumbnail: {
    path: 'http://...',
    extension: 'jpg'
  },
  comics: {
    available: 3061,
    items: [
      { resourceURI: 'http://...' }
    ]
  },
  urls: [
    { type: 'detail', url: '...' },
    { type: 'wiki', url: '...' }
  ]
}
```
