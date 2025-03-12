export interface film {
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  id: number;
  isFavorite: boolean;
  videoLink: string;
  previewVideoLink: string;
  reviews: {
    rating: number;
    description: string;
  }[];
}

export const films: film[] = [
  {
    name: 'Shutter Island',
    posterImage: 'https://12.react.htmlacademy.pro/static/film/poster/Shutter_Island.jpg',
    previewImage: 'https://12.react.htmlacademy.pro/static/film/preview/shutter-island.jpg',
    backgroundImage: 'https://12.react.htmlacademy.pro/static/film/background/Shutter_Island.jpg',
    backgroundColor: '#977461',
    description: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.',
    rating: 4.1,
    scoresCount: 1002557,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Emily Mortimer',
      'Mark Ruffalo'
    ],
    runTime: 138,
    genre: 'Thriller',
    released: 2010,
    id: 1,
    isFavorite: false,
    videoLink: 'https://12.react.htmlacademy.pro/static/film/video/bubbles.mp4',
    previewVideoLink: 'https://12.react.htmlacademy.pro/static/film/video/dog.mp4',
    reviews: []
  },
  {
    name: 'Once Upon a Time in America',
    posterImage: 'https://12.react.htmlacademy.pro/static/film/poster/Once_Upon_a_Time_in_America.jpg',
    previewImage: 'https://12.react.htmlacademy.pro/static/film/preview/Once_Upon_a_Time_in_America.jpg',
    backgroundImage: 'https://12.react.htmlacademy.pro/static/film/background/ones_upon_a_time_in_america.jpg',
    backgroundColor: '#CBAC79',
    description: 'A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.',
    rating: 9.9,
    scoresCount: 276395,
    director: 'Sergio Leone',
    starring: [
      'Robert De Niro',
      'James Woods',
      'Elizabeth McGovern'
    ],
    runTime: 229,
    genre: 'Crime',
    released: 1984,
    id: 2,
    isFavorite: true,
    videoLink: 'https://12.react.htmlacademy.pro/static/film/video/bubbles.mp4',
    previewVideoLink: 'https://12.react.htmlacademy.pro/static/film/video/dog.mp4',
    reviews: []
  },
  {
    name: 'Moonrise Kingdom',
    posterImage: 'https://12.react.htmlacademy.pro/static/film/poster/Moonrise_Kingdom.jpg',
    previewImage: 'https://12.react.htmlacademy.pro/static/film/preview/moonrise-kingdom.jpg',
    backgroundImage: 'https://12.react.htmlacademy.pro/static/film/background/Moonrise_Kingdom.jpg',
    backgroundColor: '#D8E3E5',
    description: 'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
    rating: 7.9,
    scoresCount: 291183,
    director: 'Wes Anderson',
    starring: [
      'Jared Gilman',
      'Kara Hayward',
      'Bruce Willis'
    ],
    runTime: 94,
    genre: 'Adventure',
    released: 2012,
    id: 3,
    isFavorite: false,
    videoLink: 'https://12.react.htmlacademy.pro/static/film/video/bike.mp4',
    previewVideoLink: 'https://12.react.htmlacademy.pro/static/film/video/dog.mp4',
    reviews: []
  },
  {
    name: 'Snatch',
    posterImage: 'https://12.react.htmlacademy.pro/static/film/poster/Snatch.jpg',
    previewImage: 'https://12.react.htmlacademy.pro/static/film/preview/snatch.jpg',
    backgroundImage: 'https://12.react.htmlacademy.pro/static/film/background/Snatch.jpg',
    backgroundColor: '#FDFDFC',
    description: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.',
    rating: 0.2,
    scoresCount: 716577,
    director: 'Guy Ritchie',
    starring: [
      'Jason Statham',
      'Brad Pitt',
      'Benicio Del Toro'
    ],
    runTime: 104,
    genre: 'Comedy',
    released: 2000,
    id: 4,
    isFavorite: false,
    videoLink: 'https://12.react.htmlacademy.pro/static/film/video/bubbles.mp4',
    previewVideoLink: 'https://12.react.htmlacademy.pro/static/film/video/dog.mp4',
    reviews: []
  },
  {
    name: 'Orlando',
    posterImage: 'https://12.react.htmlacademy.pro/static/film/poster/Orlando.jpg',
    previewImage: 'https://12.react.htmlacademy.pro/static/film/preview/orlando.jpg',
    backgroundImage: 'https://12.react.htmlacademy.pro/static/film/background/Orlando.jpg',
    backgroundColor: '#D8D3BD',
    description: 'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.',
    rating: 2.6,
    scoresCount: 12292,
    director: 'Sally Potter',
    starring: [
      'Tilda Swinton',
      'Billy Zane',
      'Quentin Crisp'
    ],
    runTime: 94,
    genre: 'Drama',
    released: 1992,
    id: 5,
    isFavorite: false,
    videoLink: 'https://12.react.htmlacademy.pro/static/film/video/matrix.mp4',
    previewVideoLink: 'https://12.react.htmlacademy.pro/static/film/video/traffic.mp4',
    reviews: []
  },
  {
    name: 'We need to talk about Kevin',
    posterImage: 'https://12.react.htmlacademy.pro/static/film/poster/We_need_to_talk_about_Kevin.jpg',
    previewImage: 'https://12.react.htmlacademy.pro/static/film/preview/we-need-to-talk-about-kevin.jpg',
    backgroundImage: 'https://12.react.htmlacademy.pro/static/film/background/We_need_to_talk_about_Kevin.jpg',
    backgroundColor: '#E1DFDE',
    description: 'Kevin`s mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.',
    rating: 3.8,
    scoresCount: 123240,
    director: 'Lynne Ramsay',
    starring: [
      'Tilda Swinton',
      'John C. Reilly',
      'Ezra Miller'
    ],
    runTime: 112,
    genre: 'Drama',
    released: 2011,
    id: 6,
    isFavorite: false,
    videoLink: 'https://12.react.htmlacademy.pro/static/film/video/bike.mp4',
    previewVideoLink: 'https://12.react.htmlacademy.pro/static/film/video/dog.mp4',
    reviews: []
  },
  {
    name: 'A Star Is Born',
    posterImage: 'https://12.react.htmlacademy.pro/static/film/poster/A_Star_Is_Born.jpg',
    previewImage: 'https://12.react.htmlacademy.pro/static/film/preview/A_Star_Is_Born.jpg',
    backgroundImage: 'https://12.react.htmlacademy.pro/static/film/background/A_Star_is_Born.jpg',
    backgroundColor: '#C4C0C0',
    description: 'A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.',
    rating: 3.9,
    scoresCount: 244484,
    director: 'Bradley Cooper',
    starring: [
      'Lady Gaga',
      'Bradley Cooper',
      'Sam Elliott'
    ],
    runTime: 136,
    genre: 'Drama',
    released: 2018,
    id: 7,
    isFavorite: false,
    videoLink: 'https://12.react.htmlacademy.pro/static/film/video/bike.mp4',
    previewVideoLink: 'https://12.react.htmlacademy.pro/static/film/video/traffic.mp4',
    reviews: []
  },
  {
    name: 'Macbeth',
    posterImage: 'https://12.react.htmlacademy.pro/static/film/poster/Macbeth.jpg',
    previewImage: 'https://12.react.htmlacademy.pro/static/film/preview/macbeth.jpg',
    backgroundImage: 'https://12.react.htmlacademy.pro/static/film/background/Macbeth.jpg',
    backgroundColor: '#F1E9CE',
    description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.',
    rating: 3.3,
    scoresCount: 48798,
    director: 'Justin Kurzel',
    starring: [
      'Michael Fassbender',
      'Marion Cotillard',
      'Jack Madigan'
    ],
    runTime: 113,
    genre: 'Drama',
    released: 2015,
    id: 8,
    isFavorite: false,
    videoLink: 'https://12.react.htmlacademy.pro/static/film/video/matrix.mp4',
    previewVideoLink: 'https://12.react.htmlacademy.pro/static/film/video/traffic.mp4',
    reviews: []
  }
];



