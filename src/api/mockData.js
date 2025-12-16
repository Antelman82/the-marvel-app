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

// Mock comic data with character images for tiles
export const mockComics = {
  '1': {
    id: 1,
    title: 'Spider-Man',
    description: 'The Amazing Spider-Man',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a8c3e4f',
      extension: 'jpg'
    }
  },
  '2': {
    id: 2,
    title: 'Iron Man',
    description: 'The Invincible Iron Man',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/60/537bcaef74e7a',
      extension: 'jpg'
    }
  },
  '3': {
    id: 3,
    title: 'Captain America',
    description: 'The First Avenger',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b96',
      extension: 'jpg'
    }
  },
  '4': {
    id: 4,
    title: 'Thor',
    description: 'The God of Thunder',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/70/5269608b3e6da',
      extension: 'jpg'
    }
  },
  '5': {
    id: 5,
    title: 'Black Widow',
    description: 'Master Assassin',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/50/50fecad1f6cf7',
      extension: 'jpg'
    }
  },
  '6': {
    id: 6,
    title: 'Hulk',
    description: 'The Incredible Hulk',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33e37',
      extension: 'jpg'
    }
  },
  '7': {
    id: 7,
    title: 'Black Panther',
    description: 'King of Wakanda',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/5271607596e3e',
      extension: 'jpg'
    }
  },
  '8': {
    id: 8,
    title: 'Doctor Strange',
    description: 'Master of the Mystic Arts',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/fa/537d857b0f203',
      extension: 'jpg'
    }
  },
  '9': {
    id: 9,
    title: 'Vision',
    description: 'The Synthezoid Android',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/e0/537657b1ef31c',
      extension: 'jpg'
    }
  },
  '10': {
    id: 10,
    title: 'Scarlet Witch',
    description: 'Master of Magic',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/70/50bcf1e8c6579',
      extension: 'jpg'
    }
  }
};
