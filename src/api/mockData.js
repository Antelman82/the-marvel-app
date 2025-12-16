// Mock character data simulating Marvel API response
export const mockCharacters = {
  'spider-man': {
    id: 1009610,
    name: 'Spider-Man',
    description: 'Bitten by an irradiated spider, high school student Peter Parker gained the speed, strength and powers of an arachnid.',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a8c3e4f',
      extension: 'jpg'
    },
    comics: {
      available: 10,
      items: [
        { resourceURI: '1' },
        { resourceURI: '2' },
        { resourceURI: '3' },
        { resourceURI: '4' },
        { resourceURI: '5' },
        { resourceURI: '6' },
        { resourceURI: '7' },
        { resourceURI: '8' },
        { resourceURI: '9' },
        { resourceURI: '10' }
      ]
    },
    urls: [
      { type: 'detail', url: 'http://marvel.com/characters/74/spider-man' },
      { type: 'wiki', url: 'http://marvel.com/universe/Spider-Man_(Peter_Parker)' }
    ]
  }
};

// SVG data URLs for character tiles - using actual character color themes
const createCharacterImage = (bgColor, charName, accentColor) => {
  // Create a more detailed SVG with character themed colors
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#${bgColor};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#${accentColor};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#grad)"/>
      <circle cx="100" cy="60" r="35" fill="rgba(255,255,255,0.3)"/>
      <text x="100" y="130" font-size="18" font-weight="bold" fill="white" text-anchor="middle" font-family="Arial">${charName}</text>
      <text x="100" y="155" font-size="12" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-family="Arial">Marvel Hero</text>
    </svg>
  `;
  const encoded = encodeURIComponent(svg.trim());
  return `data:image/svg+xml,${encoded}`;
};

// Mock comic data with character images for tiles
export const mockComics = {
  '1': {
    id: 1,
    title: 'Spider-Man',
    description: 'The Amazing Spider-Man',
    thumbnail: {
      path: createCharacterImage('FF0000', 'Spider-Man', 'CC0000'),
      extension: ''
    }
  },
  '2': {
    id: 2,
    title: 'Iron Man',
    description: 'The Invincible Iron Man',
    thumbnail: {
      path: createCharacterImage('FFD700', 'Iron Man', 'FF8C00'),
      extension: ''
    }
  },
  '3': {
    id: 3,
    title: 'Captain America',
    description: 'The First Avenger',
    thumbnail: {
      path: createCharacterImage('0052CC', 'Captain America', '003D99'),
      extension: ''
    }
  },
  '4': {
    id: 4,
    title: 'Thor',
    description: 'The God of Thunder',
    thumbnail: {
      path: createCharacterImage('B22222', 'Thor', '8B0000'),
      extension: ''
    }
  },
  '5': {
    id: 5,
    title: 'Black Widow',
    description: 'Master Assassin',
    thumbnail: {
      path: createCharacterImage('000000', 'Black Widow', '330000'),
      extension: ''
    }
  },
  '6': {
    id: 6,
    title: 'Hulk',
    description: 'The Incredible Hulk',
    thumbnail: {
      path: createCharacterImage('228B22', 'Hulk', '006400'),
      extension: ''
    }
  },
  '7': {
    id: 7,
    title: 'Black Panther',
    description: 'King of Wakanda',
    thumbnail: {
      path: createCharacterImage('1A1A1A', 'Black Panther', 'FFD700'),
      extension: ''
    }
  },
  '8': {
    id: 8,
    title: 'Doctor Strange',
    description: 'The Sorcerer Supreme',
    thumbnail: {
      path: createCharacterImage('4169E1', 'Doctor Strange', '9932CC'),
      extension: ''
    }
  },
  '9': {
    id: 9,
    title: 'Vision',
    description: 'The Artificial Avenger',
    thumbnail: {
      path: createCharacterImage('FF6347', 'Vision', '00FF00'),
      extension: ''
    }
  },
  '10': {
    id: 10,
    title: 'Scarlet Witch',
    description: 'Master of Magic',
    thumbnail: {
      path: createCharacterImage('8B0000', 'Scarlet Witch', 'FF1493'),
      extension: ''
    }
  }
};
