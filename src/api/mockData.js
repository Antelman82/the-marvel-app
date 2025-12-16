// Mock character data simulating Marvel API response
export const mockCharacters = {
  'spider-man': {
    id: 1009610,
    name: 'Spider-Man',
    description: 'Bitten by an irradiated spider, high school student Peter Parker gained the speed, strength and powers of an arachnid. Adopting the identity of Spider-Man, Peter hoped to use his new abilities to help people, only to have tragedy strike his life. Failing to stop a burglar, the criminal responsible for killing his uncle, Peter would channel his guilt into fighting crime as Spider-Man. In the wake of his uncle\'s death, Peter learned that with great power comes great responsibility.',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a8c3e4f',
      extension: 'jpg'
    },
    comics: {
      available: 3061,
      items: [
        { resourceURI: 'http://gateway.marvel.com/v1/public/comics/15997' },
        { resourceURI: 'http://gateway.marvel.com/v1/public/comics/21985' },
        { resourceURI: 'http://gateway.marvel.com/v1/public/comics/9299' },
        { resourceURI: 'http://gateway.marvel.com/v1/public/comics/12429' },
        { resourceURI: 'http://gateway.marvel.com/v1/public/comics/13718' },
        { resourceURI: 'http://gateway.marvel.com/v1/public/comics/16411' },
        { resourceURI: 'http://gateway.marvel.com/v1/public/comics/14702' },
        { resourceURI: 'http://gateway.marvel.com/v1/public/comics/17285' },
        { resourceURI: 'http://gateway.marvel.com/v1/public/comics/18297' },
        { resourceURI: 'http://gateway.marvel.com/v1/public/comics/19403' }
      ]
    },
    urls: [
      { type: 'detail', url: 'http://marvel.com/characters/74/spider-man' },
      { type: 'wiki', url: 'http://marvel.com/universe/Spider-Man_(Peter_Parker)' }
    ]
  }
};

// Mock comic data simulating Marvel API response
export const mockComics = {
  '15997': {
    id: 15997,
    title: 'Amazing Fantasy (1962) #1',
    description: 'The origin of Spider-Man!',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/40/4ce18691cbf04',
      extension: 'jpg'
    }
  },
  '21985': {
    id: 21985,
    title: 'The Amazing Spider-Man (1963) #1',
    description: 'Introducing the incredible Spider-Man!',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/e0/4bc6a8e3f6cf7',
      extension: 'jpg'
    }
  },
  '9299': {
    id: 9299,
    title: 'The Amazing Spider-Man (1999) #1',
    description: 'A new era begins!',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/40/52bcf1e8c6579',
      extension: 'jpg'
    }
  },
  '12429': {
    id: 12429,
    title: 'The Sensational Spider-Man (2004) #1',
    description: 'Web of intrigue!',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/40/51ca15e921244',
      extension: 'jpg'
    }
  },
  '13718': {
    id: 13718,
    title: 'Ultimate Spider-Man (2000) #1',
    description: 'A fresh take on the web-slinger!',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
      extension: 'jpg'
    }
  }
};
