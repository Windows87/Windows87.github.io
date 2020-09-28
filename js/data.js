const technologies = {
  0: 'React-Native',
  1: 'NodeJS',
  2: 'MongoDB',
  3: 'Python',
  4: 'Flask',
  5: 'MySQL',
  6: 'Markdown',
  7: 'HTML/CSS',
  8: 'Vanilla JS',
  9: 'Socket.io',
  10: 'ReactJS',
  11: 'Electron',
  12: 'Godot',
  13: 'Machine Learning',
  14: 'Nw.js',
  15: 'Angular',
  16: 'PHP',
  17: 'Java',
  18: 'Arduino'
};

const months = {
  0: 'JAN',
  1: 'FEB',
  2: 'MAR',
  3: 'APR',
  4: 'MAY',
  5: 'JUN',
  6: 'JUL',
  7: 'AGO',
  8: 'SEP',
  9: 'OCT',
  10: 'NOV',
  11: 'DEZ'
};

const projects = [
  {
    id: 29,
    name: 'Exatas Puzzles',
    images: [
      'https://lh3.googleusercontent.com/_7LN07UQk3j2L16yqsFsWu_mVvkwiqJVZOAcRnE8cFKXH8mkFEpmIbERH3VsMplUed0=w1920-h969-rw',
      'https://lh3.googleusercontent.com/aHeWuvjw7AcXwJJKwhLswWH22Dk8s8JIMsa6HYxiWcAESwoaiaTVMKzcZwWtP7VHvHHe=w1920-h969-rw',
      'https://lh3.googleusercontent.com/HaL6c9lSAPHnu_8goL9ZTND1O-isvBNjXNAdgxnzOCNzNsVLq2cWF0pHwwZQ2mQ_KOyJ=w1920-h969-rw',
      'https://lh3.googleusercontent.com/L3y_pESkPH-pQAB8aDFEgdYbWsvhiwpISwsmLM0xC1SShwfIJoP_rBETPazRk6p6vuA4=w1920-h969-rw'
    ],
    description: 'Game about logic, mathematics, chemistry, physics and computer science puzzles (+200 puzzles). Progress can be saved using Facebook authentication, but it can be played offline.',
    technologies: [0, 1, 2],
    links: {
      redirect: 'https://play.google.com/store/apps/details?id=com.cspuzzles'
    },
    date: new Date('08-01-2020')
  },

  {
    id: 0,
    name: 'Federal Agenda (Portuguese)',
    images: [
      'https://lh3.googleusercontent.com/x4Psraa23hGQrm48wJtpGqk0YUp-X52xBEcWoSHNM7LWmkWV4MPHWTmKXz_2dDBd=w1373-h910-rw',
      'https://lh3.googleusercontent.com/7RhGV-tEXoMRbc0R-dMmj2OTX88e7rmdmlQAxUHj-rMye66G_O3M3q6jkCYCPf2_n9w=w1373-h910-rw',
      'https://lh3.googleusercontent.com/6IFPn4W5hggquUTDInu0juOGQY2Vi26PrtjP-D3SPnb5mT4iwBiQbqFi-LtMwK14-Msv=w1360-h957-rw'
    ],
    description: 'Application that I developed for the technical courses of my education institution (IFSULDEMINAS), in order to organize the test dates, activities and events. I managed to apply it and have hundreds of registered users and dozens of users using it daily. The future of the app is to continue to be used and updated regularly.',
    technologies: [0, 1, 2],
    links: {
      redirect: 'https://play.google.com/store/apps/details?id=com.federalagenda'
    },
    date: new Date('08-01-2019')
  },

  { 
    id: 1,
    name: 'AILab (Portuguese)',
    images: [
      'https://raw.githubusercontent.com/Windows87/deeplab/master/screenshots/desktop-1.png',
      'https://raw.githubusercontent.com/Windows87/deeplab/master/screenshots/desktop-2.png',
      'https://raw.githubusercontent.com/Windows87/deeplab/master/screenshots/desktop-4.png',
      'https://raw.githubusercontent.com/Windows87/deeplab/master/screenshots/desktop-5.png'
    ],
    description: 'Website that I developed for posting Artificial Intelligence articles from a study group.',
    technologies: [7, 8, 3, 4, 5],
    links: { 
      redirect: 'http://ailab.com.br',
      repository: 'https://github.com/Windows87/ailab'
    },
    date: new Date('05-01-2020')
  },

  {
    id: 2,
    name: 'The Wikipédia Article Game Mobile',
    images: [
      'https://raw.githubusercontent.com/Windows87/the-wikipedia-article-game-mobile/master/screenshots/mobile-1.jpeg',
      'https://raw.githubusercontent.com/Windows87/the-wikipedia-article-game-mobile/master/screenshots/mobile-2.jpeg',
      'https://raw.githubusercontent.com/Windows87/the-wikipedia-article-game-mobile/master/screenshots/mobile-4.jpeg'   
    ],
    description: 'Game that uses the Wikipedia APIs. The game shows the photo and the name of two articles, the goal is to deduce which of these two articles is the most viewed.',
    technologies: [0],
    links: {
      redirect: 'https://play.google.com/store/apps/details?id=com.thewikipediaarticlegamemobile',
      repository: 'https://github.com/Windows87/the-wikipedia-article-game-mobile/'
    },
    date: new Date('10-01-2019')
  },
  
  {
    id: 3,
    name: 'Basic Javascript Guide (Portuguese)',
    images: [
      'https://raw.githubusercontent.com/Windows87/guia-basico-javascript/master/imagens/javascript-logo.png'
    ],
    description: 'Guide written by me (in Portuguese) to teach basic Javascript concepts, such as structures, DOM and http requests.',
    technologies: [6],
    links: {
      redirect: 'https://github.com/Windows87/guia-basico-javascript/blob/master/README.md',
      repository: 'https://github.com/Windows87/guia-basico-javascript'
    },
    date: new Date('10-01-2019')
  },

  {
    id: 4,
    name: 'The Wikipédia Article Game',
    images: [
      'https://raw.githubusercontent.com/Windows87/the-wikipedia-article-game/master/printscreens/desktop-0.png',
      'https://raw.githubusercontent.com/Windows87/the-wikipedia-article-game/master/printscreens/desktop-1.png',
      'https://raw.githubusercontent.com/Windows87/the-wikipedia-article-game/master/printscreens/mobile-0.jpeg',
      'https://raw.githubusercontent.com/Windows87/the-wikipedia-article-game/master/printscreens/mobile-1.jpeg'
    ],
    description: 'Game that uses the Wikipedia APIs. The game shows the photo and the name of two articles, the goal is to deduce which of these two articles is the most viewed. Web Version of the Game (But Responsive).',
    technologies: [7, 8],
    links:{ 
      redirect: 'https://windows87.github.io/the-wikipedia-article-game/',
      repository: 'https://github.com/Windows87/the-wikipedia-article-game'
    },
    date: new Date('07-01-2019')
  },

  {
    id: 5,
    name: 'URI Python Codes',
    images: [
      'https://s3-ap-southeast-1.amazonaws.com/appbajar/uploads/apk-screen/1560MeZ1528074227-img.png'
    ],
    description: "URI Online Judge exercises that I've done using Python. More than 300 exercises solved.",
    technologies: [3],
    links: {
      redirect: 'https://www.urionlinejudge.com.br/judge/pt/profile/177613',
      repository: 'https://github.com/Windows87/uri-python'
    },
    date: new Date('05-01-2019')
  },

  {
    id: 6,
    name: 'Quotes Generator',
    images: [
      'https://raw.githubusercontent.com/Windows87/quotes-photos-generator/master/my-quote.png'
    ],
    description: 'NPM module to generate customized images through NodeJS.',
    technologies: [1],
    links: {
      redirect: 'https://www.npmjs.com/package/quotes-photos-generator',
      repository: 'https://github.com/Windows87/quotes-photos-generator'
    },
    date: new Date('07-01-2019')
  },

  {
    id: 7,
    name: 'Geobattle (Portuguese)',
    images: [
      'https://raw.githubusercontent.com/Windows87/geobattle/master/printscreens/ps1.jpg',
      'https://raw.githubusercontent.com/Windows87/geobattle/master/printscreens/ps2.jpg',
      'https://raw.githubusercontent.com/Windows87/geobattle/master/printscreens/ps3.jpg'
    ],
    description: 'Real-time game that allows two players to compete, to see who gets the most geography questions. However, it is possible to change the Geography theme to any other theme. I created for a science fair in 2018.',
    technologies: [10, 1, 9],
    links: {
      repository: 'https://github.com/Windows87/geobattle/'
    },
    date: new Date('10-01-2018')
  },

  {
    id: 8,
    name: 'Library System (Portuguese)',
    images: [
      'https://github.com/Windows87/biblioteca/raw/master/readme-images/ps1.jpg',
      'https://github.com/Windows87/biblioteca/raw/master/readme-images/ps2.jpg',
      'https://github.com/Windows87/biblioteca/raw/master/readme-images/ps3.jpg',
      'https://github.com/Windows87/biblioteca/raw/master/readme-images/ps5.jpg',
      'https://github.com/Windows87/biblioteca/raw/master/readme-images/ps7.jpg'  
    ],
    description: 'School library system that allows registration of books, students and loans. I created for my elementary school library. The download is available, along with the user manual.',
    technologies: [10, 1, 11],
    links: {
      repository: 'https://github.com/Windows87/biblioteca/'
    },
    date: new Date('10-01-2018')
  },

  {
    id: 9, name: 'Godot Pong AI',
    images: [
      'https://raw.githubusercontent.com/Windows87/godot-pong-ai/master/screenshots/test.gif',
      'https://raw.githubusercontent.com/Windows87/godot-pong-ai/master/screenshots/game.gif'
    ],
    description: 'Neural Networks and Genetic Algorithms applied to the game Pong. I used this project for deeper studies of Neural Networks.',
    technologies: [12, 13],
    links: {
      redirect: 'https://windows87.github.io/godot-pong-ai/',
      repository: 'https://github.com/Windows87/godot-pong-ai'
    },
    date: new Date('07-01-2020')
  },

  {
    id: 10,
    name: 'Trucocraft (Portuguese)', 
    images: [
      'https://raw.githubusercontent.com/Windows87/trucocraft/master/printscreens/video.gif',
      'https://raw.githubusercontent.com/Windows87/trucocraft/master/printscreens/ps1.jpeg',
      'https://raw.githubusercontent.com/Windows87/trucocraft/master/printscreens/ps2.jpeg'
    ],
    description: 'Application of the JavaScript language to create a plugin that simulates a game of truco in Minecraft (card game). Done just for fun =)',
    technologies: [8],
    links: {
      repository: 'https://github.com/Windows87/trucocraft'
    },
    date: new Date('03-01-2020')
  },

  {
    id: 11,
    name: 'Science Quotes',
    images: [
      'https://proec.ufabc.edu.br/gec/wp-content/uploads/2019/07/Albert-Einstein.png'
    ],
    description: 'API to create / get / edit famous phrases (more than 100 in Portuguese) about science. You can use the same code for other Node APIs.',
    technologies: [1, 2],
    links: {
      repository: 'https://github.com/Windows87/science-quotes'
    },
    date: new Date('07-01-2019')
  },

  {
    id: 12,
    name: 'Physics Conquest Game',
    images: [
      'https://raw.githubusercontent.com/Windows87/physics-conquest-game/master/printscreens/ps1.png',
      'https://raw.githubusercontent.com/Windows87/physics-conquest-game/master/printscreens/ps2.png',
      'https://raw.githubusercontent.com/Windows87/physics-conquest-game/master/printscreens/ps3.png',
      'https://raw.githubusercontent.com/Windows87/physics-conquest-game/master/printscreens/ps4.png',
      'https://raw.githubusercontent.com/Windows87/physics-conquest-game/master/printscreens/ps5.png'
    ],
    description: 'Real time game about physics issues. Players must try to answer the questions the teacher has asked, and for each correct answer, he gets a point, and for each wrong answer, he loses a point. The teacher can then finish the game, which will then show the ranking of who got it right.',
    technologies: [10, 1, 9],
    links: {
      repository: 'https://github.com/Windows87/physics-conquest-game'
    },
    date: new Date('11-01-2019')
  },

  //{ id: 13, name: 'SlideAI Desktop', images: [], description: '', technologies: [1], links: { repository: 'https://github.com/LeoFC97/pptx-maker' }, date: new Date('12-01-2019') },
  //{ id: 14, name: 'SlideAI Web', images: [], description: '', technologies: [1], links: { repository: 'https://github.com/slideai/SlideAI-Backend' }, date: new Date('12-01-2019') },
  
  {
    id: 15,
    name: 'Programming Language Akinator',
    images: [
      'https://raw.githubusercontent.com/Windows87/programming-language-akinator/master/screenshots/desktop-1.png',
      'https://raw.githubusercontent.com/Windows87/programming-language-akinator/master/screenshots/mobile-1.png',
      'https://raw.githubusercontent.com/Windows87/programming-language-akinator/master/screenshots/mobile-2.png'
    ],
    description: 'The website aims to find out what language you thought based on some questions. Project for the study of Machine Learning.',
    technologies: [10, 3, 4],
    links: {
      redirect: 'https://programming-language-akinator.herokuapp.com/',
      repository: 'https://github.com/Windows87/programming-language-akinator'
    },
    date: new Date('04-01-2020')
  },

  {
    id: 16,
    name: 'Presencial Black (Portuguese)',
    images: [
      'https://raw.githubusercontent.com/Windows87/presencial-black/master/screenshots/after.png'
    ],
    description: 'Creation of an extension for Google Chrome in which I changed the default style to the dark style.',
    technologies: [8],
    links: {
      repository: 'https://github.com/Windows87/presencial-black'
    },
    date: new Date('06-01-2020')
  },

  {
    id: 17,
    name: 'System Hackathon Covid-19 IFSULDEMINAS (Portuguese)',
    images: [
      'https://raw.githubusercontent.com/Windows87/sistema-hackathon-covid19/master/screenshots/desktop-1.png',
      'https://raw.githubusercontent.com/Windows87/sistema-hackathon-covid19/master/screenshots/desktop-2.png',
      'https://raw.githubusercontent.com/Windows87/sistema-hackathon-covid19/master/screenshots/desktop-3.png',
      'https://raw.githubusercontent.com/Windows87/sistema-hackathon-covid19/master/screenshots/mobile-1.png'
    ],
    description: 'System for the Hackathon Covid-19 IFSULDEMINAS Event to register ideas.',
    technologies: [7, 8, 1, 9, 5],
    links: {
      repository: 'https://github.com/Windows87/sistema-hackathon-covid19'
    },
    date: new Date('04-01-2020')
  },

  {
    id: 18,
    name: 'Mini Pokedex',
    images: [
      'https://raw.githubusercontent.com/Windows87/mini-pokedex/master/screenshots/desktop-0.png',
      'https://raw.githubusercontent.com/Windows87/mini-pokedex/master/screenshots/mobile-0.jpeg'
    ],
    description: 'Website to find pokemon by name / id through an API. I developed this website as an exercise for a course I taught on Javascript.',
    technologies: [7, 8],
    links: {
      redirect: 'https://windows87.github.io/mini-pokedex/',
      repository: 'https://github.com/Windows87/mini-pokedex'
    },
    date: new Date('08-01-2019')
  },

  {
    id: 19,
    name: 'Combine Website',
    images: [
      'https://raw.githubusercontent.com/Windows87/combine-website/master/screenshots/desktop-1.png',
      'https://raw.githubusercontent.com/Windows87/combine-website/master/screenshots/desktop-2.png',
      'https://raw.githubusercontent.com/Windows87/combine-website/master/screenshots/desktop-3.png'
    ],
    description: 'Fake website about Half-Life 2.',
    technologies: [7, 8],
    links: {
      redirect: 'https://windows87.github.io/combine-website/',
      repository: 'https://github.com/Windows87/combine-website/'
    },
    date: new Date('05-01-2019')
  },
  
  {
    id: 20,
    name: 'Vanilla Chat',
    images: [
      'https://raw.githubusercontent.com/Windows87/vanilla-chat/master/screenshots/desktop-0.png',
      'https://raw.githubusercontent.com/Windows87/vanilla-chat/master/screenshots/desktop-1.png',
    ],
    description: 'Live chat with Vanilla Javascript.',
    technologies: [7, 8, 1, 9],
    links: {
      repository: 'https://github.com/Windows87/vanilla-chat/'
    },
    date: new Date('02-01-2019')
  },

  {
    id: 21,
    name: 'XBM Viewer and Converter',
    images: [
      'https://raw.githubusercontent.com/Windows87/xbm-viewer-converter/master/screenshots/desktop-1.png',
      'https://raw.githubusercontent.com/Windows87/xbm-viewer-converter/master/screenshots/desktop-2.png'
    ],
    description: 'Website that allows you to generate XBM files from other photos, using the browser itself. It also allows you to view other XBM files.',
    technologies: [7, 8],
    links: {
      redirect: 'https://windows87.github.io/xbm-viewer-converter/',
      repository: 'https://github.com/Windows87/xbm-viewer-converter/'
    },
    date: new Date('01-01-2019')
  },

  {
    id: 22,
    name: 'Calc!',
    images: [
      'https://raw.githubusercontent.com/Windows87/calc/master/screenshots/desktop-1.png',
      'https://raw.githubusercontent.com/Windows87/calc/master/screenshots/desktop-2.png',
      'https://raw.githubusercontent.com/Windows87/calc/master/screenshots/mobile-1.png'
    ],
    description: 'Simple math game about multiplication.',
    technologies: [7, 8],
    links: {
      redirect: 'https://windows87.github.io/calc/',
      repository: 'https://github.com/Windows87/calc'
    },
    date: new Date('11-01-2018')
  },

  {
    id: 23,
    name: 'RNMaps',
    images: [
      'https://github.com/Windows87/RNMaps/raw/master/readme-images/Map.jpeg',
      'https://github.com/Windows87/RNMaps/raw/master/readme-images/AddMarker.jpeg',
      'https://github.com/Windows87/RNMaps/raw/master/readme-images/MarkerScreen.jpeg'
    ],
    description: 'Application for learn Google Maps SDK for mobile.',
    technologies: [0, 1, 2],
    links: {
      repository: 'https://github.com/Windows87/RNMaps'
    },
    date: new Date('09-01-2018')
  },

  {
    id: 24,
    name: 'React Notes',
    images: [
      'https://github.com/Windows87/react-notes/raw/master/screenshots/home.jpg',
      'https://github.com/Windows87/react-notes/raw/master/screenshots/note.jpg',
      'https://github.com/Windows87/react-notes/raw/master/screenshots/new-note.jpg'
    ],
    description: 'Offline notepad created with React for Desktop for studies, with installer from Windows XP.',
    technologies: [10, 14],
    links: {
      repository: 'https://github.com/Windows87/react-notes/'
    },
    date: new Date('08-01-2018')
  },

  {
    id: 25,
    name: 'NWjs Contact List',
    images: [
      'https://github.com/Windows87/nwjs-contact-list/raw/master/screenshot.jpg'
    ],
    description: 'Desktop contact list created for studies.',
    technologies: [7, 8, 14],
    links: {
      repository: 'https://github.com/Windows87/nwjs-contact-list/'
    },
    date: new Date('08-01-2018')
  },

  {
    id: 26,
    name: 'React Chat',
    images: [
      'https://github.com/Windows87/react-chat/raw/master/readme/image-1.jpg',
      'https://github.com/Windows87/react-chat/raw/master/readme/image-2.jpg',
      'https://github.com/Windows87/react-chat/raw/master/readme/image-3.jpg'
    ],
    description: 'Real-time chat created with React.', 
    technologies: [10, 1, 2, 9],
    links: {
      repository: 'https://github.com/Windows87/react-chat/'
    },
    date: new Date('07-01-2018')
  },

  {
    id: 27,
    name: 'Imgular',
    images: [
      'https://github.com/Windows87/imgular/raw/master/readme-images/home-desktop.jpg',
      'https://github.com/Windows87/imgular/raw/master/readme-images/home.jpg',
      'https://github.com/Windows87/imgular/raw/master/readme-images/image.jpg',
      'https://github.com/Windows87/imgular/raw/master/readme-images/write.jpg'
    ],
    description: 'Project using Angular for studies. The objective of the project is to imitate Imgur, being able to upload and view images.',
    technologies: [15, 1, 2],
    links: {
      repository: 'https://github.com/Windows87/Imgular'
    },
    date: new Date('08-01-2018')
  },

  {
    id: 28,
    name: 'Asura Glass',
    images: [
      'https://raw.githubusercontent.com/AsuraProject/asuraproject.github.com/master/photos/photo-5.jpg',
      'https://raw.githubusercontent.com/AsuraProject/asuraproject.github.com/master/photos/photo-3.jpg',
      'https://raw.githubusercontent.com/AsuraProject/WebService/master/screenshots/desktop-1.png',
      'https://raw.githubusercontent.com/AsuraProject/WebService/master/screenshots/desktop-2.png',
      'https://raw.githubusercontent.com/AsuraProject/AsuraIDE/master/screenshots/desktop-1.png',
      'https://raw.githubusercontent.com/AsuraProject/AsuraIDE/master/screenshots/desktop-3.png',
      'https://raw.githubusercontent.com/AsuraProject/AsuraIDE/master/screenshots/desktop-4.png'
    ],
    description: 'Very old project of mine (2017) and very complex. I used many different languages ​​in order to create a smartglass. In the end, I developed a Javascript editor, HTML / CSS / JS / PHP website, Java Android app and Arduino code.',
    technologies: [7, 8, 11, 16, 17, 18, 5],
    links: {
      repository: 'https://github.com/AsuraProject/asuraproject.github.com'
    },
    date: new Date('08-01-2017')
  },
];