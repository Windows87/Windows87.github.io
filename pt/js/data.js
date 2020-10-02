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
  1: 'FEV',
  2: 'MAR',
  3: 'ABR',
  4: 'MAI',
  5: 'JUN',
  6: 'JUL',
  7: 'AGO',
  8: 'SET',
  9: 'OUT',
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
    description: 'Jogo envolvendo mais de 200 puzzles da área de Exatas: Lógica, Matemática, Química, Física e Computação. O progresso pode ser salvo utilizando a autenticação do Facebook, porém, pode ser jogado offline.',
    technologies: [0, 1, 2],
    links: {
      redirect: 'https://play.google.com/store/apps/details?id=com.cspuzzles'
    },
    date: new Date('09-01-2020')
  },

  {
    id: 0,
    name: 'Federal Agenda',
    images: [
      'https://lh3.googleusercontent.com/x4Psraa23hGQrm48wJtpGqk0YUp-X52xBEcWoSHNM7LWmkWV4MPHWTmKXz_2dDBd=w1373-h910-rw',
      'https://lh3.googleusercontent.com/7RhGV-tEXoMRbc0R-dMmj2OTX88e7rmdmlQAxUHj-rMye66G_O3M3q6jkCYCPf2_n9w=w1373-h910-rw',
      'https://lh3.googleusercontent.com/6IFPn4W5hggquUTDInu0juOGQY2Vi26PrtjP-D3SPnb5mT4iwBiQbqFi-LtMwK14-Msv=w1360-h957-rw'
    ],
    description: 'Aplicativo que desenvolvi para os cursos técnicos da minha instituição (IFSULDEMINAS), com o objetivo de organizar as datas de prova, atividades e eventos. Consegui aplicá-lo e ter centenas de usuários cadastrados e dezenas de usuários usando diariamente. O futuro do aplicativo é continuar sendo usado e atualizado regularmente.',
    technologies: [0, 1, 2],
    links: {
      redirect: 'https://play.google.com/store/apps/details?id=com.federalagenda'
    },
    date: new Date('08-01-2019')
  },

  {
    id: 30,
    name: 'Habits Tracker',
    images: [
      'https://lh3.googleusercontent.com/DLp8A8EbgnYWq5HQb99HGwHase1HUUttI5wHTSJSHW9j_revBXpCQ83i2Rhcrt19rFgI=w1170-h948-rw',
      'https://lh3.googleusercontent.com/Fn1M4BIVZRHwDu1e5msLgIlqujPZl61JCPboFxIyfns6uL6e5u6pBndyggXVE197qbg=w1170-h948-rw',
      'https://lh3.googleusercontent.com/qRc8XOUxvOGnDcPffUggOSv4N_56AHH_G-hqnWX8n7nDCFQkNShOyCEhohfDHWVs-aY=w1170-h948-rw',
      'https://lh3.googleusercontent.com/4Rpb1YLwg2k_JhwIDKPBbvDbmy_JcPjnf--PHM-ErL55eOGAhc-X-tOLWa3r-oZEgQ=w1170-h948-rw'
    ],
    description: 'Acompanhe o progresso e a evolução de seus hábitos e metas. Heatmap, Gráficos, Dados, Offline e Modo Night/Light.',
    technologies: [0],
    links: {
      redirect: 'https://play.google.com/store/apps/details?id=com.heatmaphabittracker'
    },
    date: new Date('09-01-2020')
  },

  { 
    id: 1,
    name: 'AILab',
    images: [
      'https://raw.githubusercontent.com/Windows87/deeplab/master/screenshots/desktop-1.png',
      'https://raw.githubusercontent.com/Windows87/deeplab/master/screenshots/desktop-2.png',
      'https://raw.githubusercontent.com/Windows87/deeplab/master/screenshots/desktop-4.png',
      'https://raw.githubusercontent.com/Windows87/deeplab/master/screenshots/desktop-5.png'
    ],
    description: 'Website que desenvolvi para a postagem de artigos sobre Inteligência Artificial de um grupo de estudos.',
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
    description: 'Game que utiliza as APIs da Wikipédia. O jogo mostra a foto e o nome de dois artigos, o objetivo é deduzir qual destes dois artigos é o mais visualizado.',
    technologies: [0],
    links: {
      redirect: 'https://play.google.com/store/apps/details?id=com.thewikipediaarticlegamemobile',
      repository: 'https://github.com/Windows87/the-wikipedia-article-game-mobile/'
    },
    date: new Date('10-01-2019')
  },
  
  {
    id: 3,
    name: 'Guia Básico de Javascript',
    images: [
      'https://raw.githubusercontent.com/Windows87/guia-basico-javascript/master/imagens/javascript-logo.png'
    ],
    description: 'Guia escrito por mim para ensinar conceitos básicos de Javascript, como estruturas, DOM e requisições http.',
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
    description: 'Game que utiliza as APIs da Wikipédia. O jogo mostra a foto e o nome de dois artigos, o objetivo é deduzir qual destes dois artigos é o mais visualizado. Versão Web do Jogo (Mas Responsivo).',
    technologies: [7, 8],
    links:{ 
      redirect: 'https://windows87.github.io/the-wikipedia-article-game/',
      repository: 'https://github.com/Windows87/the-wikipedia-article-game'
    },
    date: new Date('07-01-2019')
  },

  {
    id: 5,
    name: 'Meus Códigos do URI em Python',
    images: [
      'https://s3-ap-southeast-1.amazonaws.com/appbajar/uploads/apk-screen/1560MeZ1528074227-img.png'
    ],
    description: 'Exercícios do URI Online Judge que eu já fiz utilizando Python. Mais de 300 exercícios resolvidos.',
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
    description: 'Módulo NPM para gerar imagens customizadas por meio do NodeJS.',
    technologies: [1],
    links: {
      redirect: 'https://www.npmjs.com/package/quotes-photos-generator',
      repository: 'https://github.com/Windows87/quotes-photos-generator'
    },
    date: new Date('07-01-2019')
  },

  {
    id: 31,
    name: 'React Native Heatmap Chart',
    images: [
      'https://github.com/Windows87/react-native-heatmap-chart/raw/master/screenshots/example.jpg',
    ],
    description: 'Módulo NPM sobre um Componente de Mapa de Calor (Heatmap) para React-Native.',
    technologies: [0],
    links: {
      repository: 'https://github.com/Windows87/react-native-heatmap-chart'
    },
    date: new Date('09-01-2020')
  },

  {
    id: 7,
    name: 'Geobattle',
    images: [
      'https://raw.githubusercontent.com/Windows87/geobattle/master/printscreens/ps1.jpg',
      'https://raw.githubusercontent.com/Windows87/geobattle/master/printscreens/ps2.jpg',
      'https://raw.githubusercontent.com/Windows87/geobattle/master/printscreens/ps3.jpg'
    ],
    description: 'Jogo em tempo real que permite dois jogadores competirem, para ver quem acerta mais questões de Geografia. Porém, é possível modificar o tema de Geografia para qualquer outro tema. Criei para uma feira de ciências em 2018.',
    technologies: [10, 1, 9],
    links: {
      repository: 'https://github.com/Windows87/geobattle/'
    },
    date: new Date('10-01-2018')
  },

  {
    id: 8,
    name: 'Sistema para Biblioteca',
    images: [
      'https://github.com/Windows87/biblioteca/raw/master/readme-images/ps1.jpg',
      'https://github.com/Windows87/biblioteca/raw/master/readme-images/ps2.jpg',
      'https://github.com/Windows87/biblioteca/raw/master/readme-images/ps3.jpg',
      'https://github.com/Windows87/biblioteca/raw/master/readme-images/ps5.jpg',
      'https://github.com/Windows87/biblioteca/raw/master/readme-images/ps7.jpg'  
    ],
    description: 'Sistema para biblioteca escolar que permite cadastro de livros, alunos e empréstimos. Criei para a biblioteca da minha escola do fundamental. O download está disponível, junto com o manual de uso.',
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
    description: 'Redes Neurais e Algoritmos Genéticos aplicados ao jogo Pong. Utilizei esse projeto para estudos mais profundos de Redes Neurais.',
    technologies: [12, 13],
    links: {
      redirect: 'https://windows87.github.io/godot-pong-ai/',
      repository: 'https://github.com/Windows87/godot-pong-ai'
    },
    date: new Date('07-01-2020')
  },

  {
    id: 10,
    name: 'Trucocraft', 
    images: [
      'https://raw.githubusercontent.com/Windows87/trucocraft/master/printscreens/video.gif',
      'https://raw.githubusercontent.com/Windows87/trucocraft/master/printscreens/ps1.jpeg',
      'https://raw.githubusercontent.com/Windows87/trucocraft/master/printscreens/ps2.jpeg'
    ],
    description: 'Aplicação da linguagem JavaScript para a criação de um plugin que simula um jogo de truco no Minecraft. Feito apenas por diversão =)',
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
    description: 'API para criar/obter/editar frases famosas (mais de 100 em português) sobre ciência. Pode-se utilizar o mesmo código para outras APIs Node.',
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
    description: 'Jogo em tempo real sobre questões de física. Os jogadores devem tentar responder as perguntas que o professor passou, e a cada resposta correta, ele ganha um ponto, e a cada resposta errada, ele perde um ponto. O professor então pode finalizar a partida, que então irá mostrar o ranking de quem mais acertou.',
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
    description: 'O Website tem o objetivo de descobrir qual a linguagem que você pensou baseado em algumas perguntas. Projeto para estudo de Machine Learning.',
    technologies: [10, 3, 4],
    links: {
      redirect: 'https://programming-language-akinator.herokuapp.com/',
      repository: 'https://github.com/Windows87/programming-language-akinator'
    },
    date: new Date('04-01-2020')
  },

  {
    id: 16,
    name: 'Presencial Black',
    images: [
      'https://raw.githubusercontent.com/Windows87/presencial-black/master/screenshots/after.png'
    ],
    description: 'Criação de uma extensão para Google Chrome em que eu modifiquei o estilo padrão para o estilo dark.',
    technologies: [8],
    links: {
      repository: 'https://github.com/Windows87/presencial-black'
    },
    date: new Date('06-01-2020')
  },

  {
    id: 17,
    name: 'Sistema Hackathon Covid-19 IFSULDEMINAS',
    images: [
      'https://raw.githubusercontent.com/Windows87/sistema-hackathon-covid19/master/screenshots/desktop-1.png',
      'https://raw.githubusercontent.com/Windows87/sistema-hackathon-covid19/master/screenshots/desktop-2.png',
      'https://raw.githubusercontent.com/Windows87/sistema-hackathon-covid19/master/screenshots/desktop-3.png',
      'https://raw.githubusercontent.com/Windows87/sistema-hackathon-covid19/master/screenshots/mobile-1.png'
    ],
    description: 'Sistema para o Evento Hackathon Covid-19 IFSULDEMINAS para cadastro de ideias.',
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
    description: 'Website para achar pokemóns pelo nome/id por meio de uma API. Desenvolvi esse website como exercício para um curso que ministrei sobre Javascript.',
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
    description: 'Website fake sobre o jogo de Half-Life 2.',
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
    description: 'Chat em tempo real com Javascript puro.',
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
    description: 'Website que permite gerar arquivos XBM a partir de outras fotos, usando o próprio navegador. Também permite visualizar outros arquivos XBM.',
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
    description: 'Jogo simples de matemática, sobre multiplicação.',
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
    description: 'Aplicativo para estudos sobre o Google Maps para mobile.',
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
    description: 'Bloco de notas offline criado com React para Desktop para estudos, com instalador a partir do Windows XP.',
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
    description: 'Lista de contatos Desktop criado para estudos.',
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
    description: 'Chat em tempo real criado com React.', 
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
    description: 'Projeto usando Angular para estudos. O objetivo do projeto é imitar o Imgur, podendo fazer o upload e visualizar imagens.',
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
    description: 'Projeto muito antigo meu (2017) e bem complexo. Utilizei muitas linguagens diferentes, com o objetivo de criar um smartglass. No final, desenvolvi um editor Javascript, website HTML/CSS/JS/PHP, app Java Android e código Arduino.',
    technologies: [7, 8, 11, 16, 17, 18, 5],
    links: {
      repository: 'https://github.com/AsuraProject/asuraproject.github.com'
    },
    date: new Date('08-01-2017')
  },
];