const projects = {
  'minipokedex': { title: 'Mini Pokedex', image: `pokedex.png`, text: `Mini Pokedex is a website developed was activity to Javascript course at IFSULDEMINAS - Campus Muzambinho. <a href="https://windows87.github.io/mini-pokedex/">Click here</a> to access.`, github: `https://github.com/Windows87/mini-pokedex`, languages: ['HTML', 'CSS', 'Javascript', 'Ago/2019'] },
  'oficina': { title: 'Modern Javascript Course', image: `oficina.png`, text: `This website was developed for a course to Computer Week (Semana da Informática do IFSULDEMINAS - Campus Muzambinho). <a href="https://windows87.github.io/seminfo-javascript-moderno/">Click here</a> to access (in portuguese).`, github: `https://github.com/Windows87/seminfo-javascript-moderno`, languages: ['HTML', 'CSS', 'Javascript', 'Ago/2019'] },
  'wikigame': { title: 'The Wikipedia Article Game', image: `wikigame.png`, text: `It's a game that objective is hit which article has more views based in their photos and titles. You can play <a href="https://windows87.github.io/the-wikipedia-article-game/"><b>clicking here</b></a>.`, github: `https://github.com/Windows87/the-wikipedia-article-game`, languages: ['HTML', 'CSS', 'Javascript', 'Jul/2019'] },
  'combine': { title: 'Combine Website', image: `combine.png`, text: `It's a fake website about Combines from Half-Life 2 game. You can view <a href="https://windows87.github.io/combine-website/">clicking here (it's in portuguese)</a>.`, github: `https://github.com/Windows87/combine-website/`, languages: ['HTML', 'CSS', 'Javascript', 'May/2019'] },
  'vanillachat': { title: 'Vanilla Chat', image: `vanillachat.png`, text: `It's a sample chat made with HTML5, CSS3, VanillaJS and NodeJS using Sockets.`, github: `https://github.com/Windows87/vanilla-chat/`, languages: ['HTML', 'CSS', 'Javascript', 'NodeJS', 'Socket.io', 'Feb/2019'] },
  'xbm': { title: 'XBM Viewer and Converter', image: `xbm.png`, text: `You can convert images and create images in .xbm. You can do it <a href="https://windows87.github.io/xbm-viewer-converter/"><b>clicking here</b></a>.`, github: `https://github.com/Windows87/xbm-viewer-converter/`, languages: ['HTML', 'CSS', 'Javascript', 'Jan/2019'] },
  'reactchat': { title: 'React Chat', image: `reactchat.png`, text: `It's a sample chat made with ReactJS and NodeJS using Sockets.`, github: `https://github.com/Windows87/react-chat/`, languages: ['ReactJS', 'NodeJS', 'Socket.io', 'Jul/2018'] },
  'calc': { title: 'Calc', image: `calc.png`, text: `It's a simple math game that I made for math exposition when I was in middle school. You can play <a href="https://windows87.github.io/calc/"><b>clicking here</b></a>.`, github: `https://github.com/Windows87/calc`, languages: ['HTML', 'CSS', 'Javascript', 'Nov/2018'] },
  'outtfy': { title: 'Outtfy Website', image: `outtfy.png`, text: `It's was a website based in a startup ideia, but the startup wasn't worked. You can see the website <a href="https://windows87.github.io/outtfy-website/"><b>clicking here</b></a>. `, github: `https://github.com/Windows87/outtfy/`, languages: ['HTML', 'CSS', 'Sep/2018'] },
  'geobattle': { title: 'Geobattle', image: `geobattle.png`, text: `It's a multiplayer game that objective is hit the most question about Geography. I made this for geography exposition when I was in middle school.`, github: `https://github.com/Windows87/geobattle/`, languages: ['ReactJS', 'NodeJS', 'Socket.io', 'neDB', '2018'] },
  'rnmaps': { title: 'RNMaps', image: `rnmaps.png`, text: `It's a sample app to test Google Maps SDK for React-Native. In the app you can mark locations with icons.`, github: `https://github.com/Windows87/RNMaps`, languages: ['React-Native', 'NodeJS', 'MongoDB', 'Sep/2018'] },
  'reactnotes': { title: 'React Notes', image: `reactnotes.png`, text: `It's a desktop notes application. You can download <a href="http://download1640.mediafire.com/g5sqwhvudpgg/65g3e1474fsrqr8/setup32.exe"><b>here for Windows XP+ (32 bit)</b></a> or <a href="http://download2263.mediafire.com/s1fgfp4qg6cg/2c0ici4dz0leou8/setup64.exe"><b>Windows XP+ (64 Bits)</b></a>.`, github: `https://github.com/Windows87/react-notes/`, languages: ['ReactJS', 'NodeJS', 'NWjs', 'neDB', 'Aug/2018'] },
  'library': { title: 'Library', image: `library.png`, text: `It's a complete library system (in portuguese) that I was made for my school when I was in middle school. You can download <a href="http://www.mediafire.com/file/mma5n5z0a2mea3j/Setup.exe/file"><b>here for Windows 7+ (portuguese)</b></a> and download <a href="http://www.mediafire.com/file/5y046q0oy382q12/Manual_do_Sistema_da_Biblioteca.pdf/file"><b>here the manual (portuguese)</b></a>.`, github: `https://github.com/Windows87/biblioteca/`, languages: ['ReactJS', 'NodeJS', 'Electron', 'May/2018'] },
  'contactlist': { title: 'NWjs Contact List', image: `contactlist.png`, text: `It's a desktop contact list application.`, github: `https://github.com/Windows87/nwjs-contact-list/`, languages: ['HTML', 'CSS', 'Javascript', 'NodeJS', 'NWjs', 'neDB', 'Aug/2018'] },
  'quotesgenerator': { title: 'Quotes Generator', image: `quotesgenerator.png`, text: `It's a node module that generate a photo with a background image and a quote with highlighted words.`, github: `https://github.com/Windows87/quotes-photos-generator`, languages: ['NodeJS', 'Jul/2019'] },
  'pptxmaker': { title: 'PPTX Maker', text: `It's a desktop application that generate powerpoint presentations. I'm not the repository owner but I'm a contributor.`, github: `https://github.com/LeoFC97/pptx-maker`, languages: ['NodeJS', 'Jul/2019'] },
  'trucocraft': { title: 'Trucocraft', image: `trucocraft.png`, text: `It's a Minecraft plugin made with Javascript about a card game ("Truco", it's very popular in South America).`, github: `https://github.com/Windows87/trucocraft`, languages: ['Javascript', 'ScriptCraft', 'Mar/2019'] },
  'sciencequotes': { title: 'Science Quotes', text: `It's a API REST that you can get, post, update and delete quotes about science themes, like Astronomy, Math and Physics.`, github: `https://github.com/Windows87/science-quotes`, languages: ['NodeJS', 'MongoDB', 'Jul/2019'] },
  'wikimobile': { title: 'The Wikipedia Article Game Mobile', image: `wikimobile.png`, text: `Wikipedia game that you need hit which is most viewed by its photos and names. It's the <a href="https://windows87.github.io/the-wikipedia-article-game/">The Wikipedia Article Game</a> mobile version.`, github: `https://github.com/Windows87/the-wikipedia-article-game-mobile/`, languages: ['React-Native', 'Out/2019'] }
};

function setProjectFullScreen(projectId) {
  const project = projects[projectId];

  const body = document.querySelector('body');
  const pagerProjectBackground = document.querySelector('#pager-project-background');
  const pagerProjectTitle = document.querySelector('#pager-project-background header span');
  const pagerProjectGithubLink = document.querySelector('#paper-project-github-link');
  const pagerProjectImage = document.querySelector('#pager-project-image');
  const pagerProjectSpan = document.querySelector('#paper-project-span');
  const pagerProjectArticle = document.querySelector('#pager-project-background article p');
  const pagerProjectLanguages = document.querySelector('#pager-project-languages');

  body.style['overflow'] = 'hidden';
  pagerProjectGithubLink.style['display'] = 'block';

  if(!project.github)
  	pagerProjectGithubLink.style['display'] = 'none';

  pagerProjectBackground.style['display'] = 'flex';
  
  if(project.image) {
    pagerProjectImage.style['display'] = 'block';
    pagerProjectImage.src = `img/full-projects/${project.image}`;
  } else {
  	pagerProjectImage.style['display'] = 'none';
  }

  pagerProjectTitle.innerText = project.title;
  pagerProjectArticle.innerHTML = project.text;
  pagerProjectGithubLink.href = project.github;

  pagerProjectLanguages.innerHTML = '';

  project.languages.forEach(language => {
    const pagerProjectLanguage = document.createElement('span');
    pagerProjectLanguage.innerText = language;
    pagerProjectLanguages.appendChild(pagerProjectLanguage);
  });
}

function setProjects() {
  const projects = document.querySelectorAll('.vertical-pager-project');
  projects.forEach(project => {
  	project.addEventListener('click', () => setProjectFullScreen(project.id));
  });
}

const pagerProjectExit = document.querySelector('#pager-project-exit');

pagerProjectExit.addEventListener('click', () => {
  const body = document.querySelector('body');
  const pagerProjectBackground = document.querySelector('#pager-project-background');
  
  pagerProjectBackground.style['display'] = 'none';
  body.style['overflow'] = 'auto';
});

setProjects();