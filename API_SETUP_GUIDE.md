# Mock API Quick Reference

## What Changed

The app previously used the deprecated Marvel API. Now it uses a **simulated backend** that works offline and matches the Marvel API response format.

## Files Created

```
src/
├── api/
│   ├── mockAPI.js       # Functions that simulate API calls
│   └── mockData.js      # Mock character and comic data
```

## Key Features

✅ **No external API calls** - Works offline
✅ **Simulates network delays** - Realistic development experience
✅ **Same data structure** - Compatible with existing code
✅ **Easy to extend** - Add more characters/comics to mockData.js
✅ **Production ready** - Swap out for real API anytime

## Current Mock Data

- **1 Character**: Spider-Man (with full profile, 10 comics)
- **5 Comics**: Various Spider-Man comics with images

## Running the App

```bash
npm install   # Already done
npm start     # Run dev server
npm test      # Run tests
npm run build # Build for production
```

## To Add More Characters

Edit `src/api/mockData.js`:

```javascript
export const mockCharacters = {
  'spider-man': { /* ... */ },
  'iron-man': {
    id: 1009368,
    name: 'Iron Man',
    // ... rest of data
  }
};
```

## To Switch to Real Marvel API

When the API is available:

1. Create `src/api/realAPI.js`
2. Replace imports in `characterSlice.js` and `Tile.js`
3. Keep the same function signatures

---

**Note**: No API keys or external dependencies required!
