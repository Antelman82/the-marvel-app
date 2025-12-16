# SuperHero API Integration

## Overview
The app now uses the **SuperHero API** instead of the deprecated Marvel API. This provides real-time superhero data with character information, images, and statistics.

## API Details

**SuperHero API**: https://superheroapi.com/
- Free tier available
- Requires GitHub account for API token
- 200 requests per hour rate limit (free tier)
- Covers characters from DC and Marvel universes

## Setup

### Getting Your Own Access Token (Optional)

1. Visit https://superheroapi.com/
2. Click "Login with GitHub"
3. Authorize the application
4. Generate your access token
5. Replace `SUPERHERO_ACCESS_TOKEN` in `src/api/realAPI.js` with your token

### Current Setup

The app includes a public test token for development:
```javascript
const SUPERHERO_ACCESS_TOKEN = '10223372277960447';
```

**Note**: This is rate-limited. For production, get your own token.

## API Functions

### `fetchCharacterAPI(characterName)`
Searches for and returns a character by name.

```javascript
const character = await fetchCharacterAPI('spider-man');
// Returns character data with:
// - id, name, description
// - thumbnail (image)
// - comics (array of related comic IDs)
// - biography, appearance, powerstats
```

### `fetchComicAPI(characterIdOrName)`
Fetches character image/comic data by ID or name.

```javascript
const comic = await fetchComicAPI('332'); // Spider-Man ID
// Returns comic/image data with:
// - title, description
// - thumbnail (character image)
```

## Data Transformation

The SuperHero API response is automatically transformed to match the Marvel API format, so no component changes were needed.

**Transformation includes:**
- Character ID and name
- Biography and appearance data
- Image URLs
- Power statistics

## Available Characters

Some popular superheroes available:
- **Spider-Man** (ID: 620)
- **Batman** (ID: 70)
- **Superman** (ID: 644)
- **Wonder Woman** (ID: 720)
- **Iron Man** (ID: 346)
- **Captain America** (ID: 98)
- **Thor** (ID: 659)

Find more at: https://superheroapi.com/ids.html

## Features

✅ Search by character name
✅ Get detailed character info (powers, biography, appearance)
✅ Character images
✅ Power statistics (strength, speed, durability, etc.)
✅ Real-time data (no mock data)
✅ Free access tier available

## Fallback Behavior

If the API is unavailable:
1. The app will return error messages in the UI
2. Game will not load character data
3. Consider keeping the mock API as fallback

## Rate Limiting

- Free tier: 200 requests per hour
- Per-user rate limiting
- Velocity detection to prevent abuse

## To Switch Back to Mock API

Edit `src/store/characterSlice.js`:
```javascript
// Change from:
import { fetchCharacterAPI, fetchComicAPI } from '../api/realAPI';

// Back to:
import { fetchCharacterAPI, fetchComicAPI } from '../api/mockAPI';
```

And `src/Tile.js`:
```javascript
// Change from:
import { fetchComicAPI } from './api/realAPI';

// Back to:
import { fetchComicAPI } from './api/mockAPI';
```

## Troubleshooting

### "Character not found"
- Check spelling of character name
- Use exact names from SuperHero API database
- Try searching on https://superheroapi.com/ids.html

### "Too many requests"
- Rate limit exceeded (200/hour)
- Wait before making more requests
- Get your own API token for higher limits
- Use a caching layer

### Missing images
- Some characters may not have images in the database
- App will show fallback/placeholder instead

---

**Status**: ✅ Live with SuperHero API
**Requests Supported**: Real-time queries
**Build Status**: Compiled successfully
