const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Comic Vine API configuration
const COMIC_VINE_API = 'https://comicvine.gamespot.com/api';
const COMIC_VINE_KEY = '12b21adb79c0e8d2e5e1fb4e5e5e5e5e';

// Character to Comic Vine ID mapping
const CHARACTER_IDS = {
  'spider-man': '1009610',
  'iron man': '1009368',
  'captain america': '1009220',
  'thor': '1009664',
  'black widow': '1009189',
  'hulk': '1009351',
  'black panther': '1009187',
  'doctor strange': '1009282',
  'vision': '1009697',
  'scarlet witch': '1009718'
};

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

/**
 * GET /api/character/:name
 * Fetch character data from Comic Vine API or fallback to mock
 */
app.get('/api/character/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const charId = CHARACTER_IDS[name.toLowerCase()];

    if (!charId) {
      return res.status(404).json({ error: `Character ${name} not found` });
    }

    try {
      const response = await axios.get(`${COMIC_VINE_API}/character/${charId}`, {
        params: {
          api_key: COMIC_VINE_KEY,
          format: 'json',
          field_list: 'image,name,deck,description'
        }
      });

      const characterData = response.data.results;

      // Transform to Marvel API format
      const transformedData = {
        data: {
          data: {
            results: [{
              id: charId,
              name: characterData.name || name,
              description: characterData.deck || characterData.description || `Marvel character: ${name}`,
              thumbnail: {
                path: characterData.image?.medium_url || 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                extension: ''
              },
              comics: {
                available: 10,
                items: Array.from({ length: 10 }, (_, i) => ({ resourceURI: String(i + 1) }))
              }
            }]
          }
        }
      };

      res.json(transformedData);
    } catch (apiError) {
      // Fallback to mock data if Comic Vine API fails
      console.warn('Comic Vine API failed, using fallback mock data');
      const mockCharacterMap = {
        'spider-man': 'Spider-Man',
        'iron man': 'Iron Man',
        'captain america': 'Captain America',
        'thor': 'Thor',
        'black widow': 'Black Widow',
        'hulk': 'Hulk',
        'black panther': 'Black Panther',
        'doctor strange': 'Doctor Strange',
        'vision': 'Vision',
        'scarlet witch': 'Scarlet Witch'
      };

      const displayName = mockCharacterMap[name.toLowerCase()] || name;
      
      res.json({
        data: {
          data: {
            results: [{
              id: charId,
              name: displayName,
              description: `Marvel character: ${displayName}`,
              thumbnail: {
                path: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23cccccc' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23666' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(displayName)}%3C/text%3E%3C/svg%3E`,
                extension: ''
              },
              comics: {
                available: 10,
                items: Array.from({ length: 10 }, (_, i) => ({ resourceURI: String(i + 1) }))
              }
            }]
          }
        }
      });
    }
  } catch (error) {
    console.error('Error fetching character:', error.message);
    res.status(500).json({ error: 'Failed to fetch character data' });
  }
});

/**
 * GET /api/comic/:id
 * Fetch comic/character image data
 */
app.get('/api/comic/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Map numeric IDs to character names
    const characterMap = {
      '1': 'spider-man',
      '2': 'iron man',
      '3': 'captain america',
      '4': 'thor',
      '5': 'black widow',
      '6': 'hulk',
      '7': 'black panther',
      '8': 'doctor strange',
      '9': 'vision',
      '10': 'scarlet witch'
    };

    const characterName = characterMap[String(id)] || 'spider-man';
    const charId = CHARACTER_IDS[characterName.toLowerCase()];

    try {
      const response = await axios.get(`${COMIC_VINE_API}/character/${charId}`, {
        params: {
          api_key: COMIC_VINE_KEY,
          format: 'json',
          field_list: 'image,name'
        }
      });

      const characterData = response.data.results;

      const comicData = {
        data: {
          data: {
            results: [{
              id: id,
              title: characterData.name || characterName.charAt(0).toUpperCase() + characterName.slice(1).replace('-', ' '),
              description: `Marvel character: ${characterName}`,
              thumbnail: {
                path: characterData.image?.medium_url || 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                extension: ''
              }
            }]
          }
        }
      };

      res.json(comicData);
    } catch (apiError) {
      // Fallback to SVG placeholder if Comic Vine API fails
      console.warn('Comic Vine API failed for comic, using SVG fallback');
      const mockCharacterMap = {
        'spider-man': 'Spider-Man',
        'iron man': 'Iron Man',
        'captain america': 'Captain America',
        'thor': 'Thor',
        'black widow': 'Black Widow',
        'hulk': 'Hulk',
        'black panther': 'Black Panther',
        'doctor strange': 'Doctor Strange',
        'vision': 'Vision',
        'scarlet witch': 'Scarlet Witch'
      };

      const displayName = mockCharacterMap[characterName] || characterName;

      res.json({
        data: {
          data: {
            results: [{
              id: id,
              title: displayName,
              description: `Marvel character: ${displayName}`,
              thumbnail: {
                path: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23cccccc' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23666' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(displayName)}%3C/text%3E%3C/svg%3E`,
                extension: ''
              }
            }]
          }
        }
      });
    }
  } catch (error) {
    console.error('Error fetching comic:', error.message);
    res.status(500).json({ error: 'Failed to fetch comic data' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Marvel App Server running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
