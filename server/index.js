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
 * Fetch character data from Comic Vine API
 */
app.get('/api/character/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const charId = CHARACTER_IDS[name.toLowerCase()];

    if (!charId) {
      return res.status(404).json({ error: `Character ${name} not found` });
    }

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
