const projects = {
  'minipokedex': { title: 'Mini Pokedex', image: `pokedex.png`, text: `Mini Pokedex foi um website desenvolvido como atividade para a Oficina de Javascript Moderno da Semana da Informática do IFSULDEMINAS - Campus Muzambinho. <a href="https://windows87.github.io/mini-pokedex/">Clique aqui</a> para acessar.`, github: `https://github.com/Windows87/mini-pokedex`, languages: ['HTML', 'CSS', 'Javascript', 'Ago/2019'] },
  'oficina': { title: 'Oficina de Javascript Moderno', image: `oficina.png`, text: `Este foi um website que desenvolvi para uma oficina para ofertar na Semana da Informática do IFSULDEMINAS - Campus Muzambinho. Para ver o site no ar <a href="https://windows87.github.io/seminfo-javascript-moderno/">clique aqui</a>.`, github: `https://github.com/Windows87/seminfo-javascript-moderno`, languages: ['HTML', 'CSS', 'Javascript', 'Ago/2019'] },
  'wikigame': { title: 'The Wikipedia Article Game', image: `wikigame.png`, text: `Esse é um jogo que você deve acertar qual artigo apresenta mais visualizações baseado somente na sua imagem e nome. Você pode jogar <a href="https://windows87.github.io/the-wikipedia-article-game/"><b>clicando aqui</b></a>.`, github: `https://github.com/Windows87/the-wikipedia-article-game`, languages: ['HTML', 'CSS', 'Javascript', 'Jul/2019'] },
  'combine': { title: 'Combine Website', image: `combine.png`, text: `Esse é um website fake sobre os Combines do Half-Life 2. Você pode ver <a href="https://windows87.github.io/combine-website/">clicando aqui</a>.`, github: `https://github.com/Windows87/combine-website/`, languages: ['HTML', 'CSS', 'Javascript', 'Mai/2019'] },
  'vanillachat': { title: 'Vanilla Chat', image: `vanillachat.png`, text: `Esse é um exemplo de chat utilizando HTML5, CSS3, VanillaJS e NodeJS utilizando Sockets.`, github: `https://github.com/Windows87/vanilla-chat/`, languages: ['HTML', 'CSS', 'Javascript', 'NodeJS', 'Socket.io', 'Fev/2019'] },
  'xbm': { title: 'XBM Viewer and Converter', image: `xbm.png`, text: `Você pode converter imagens e criar imagens em .xbm. Você pode usar <a href="https://windows87.github.io/xbm-viewer-converter/"><b>clicando aqui</b></a>.`, github: `https://github.com/Windows87/xbm-viewer-converter/`, languages: ['HTML', 'CSS', 'Javascript', 'Jan/2019'] },
  'reactchat': { title: 'React Chat', image: `reactchat.png`, text: `É um exemplo de Chat com ReactJS e NodeJS utilizando sockets.`, github: `https://github.com/Windows87/react-chat/`, languages: ['ReactJS', 'NodeJS', 'Socket.io', 'Jul/2018'] },
  'calc': { title: 'Calc', image: `calc.png`, text: `É um jogo simples sobre matemática que eu fiz para uma exposição de matemática no Ensino Fundamental II. Você pode jogar <a href="https://windows87.github.io/calc/"><b>clicando aqui</b></a>.`, github: `https://github.com/Windows87/calc`, languages: ['HTML', 'CSS', 'Javascript', 'Nov/2018'] },
  'outtfy': { title: 'Outtfy Website', image: `outtfy.png`, text: `Esse foi um site desenvolvido para uma ideia de startup, mas essa ideia não funcionou. Mas você pode ver o website <a href="https://windows87.github.io/outtfy-website/"><b>clicando aqui</b></a>.`, github: `https://github.com/Windows87/outtfy/`, languages: ['HTML', 'CSS', 'Set/2018'] },
  'geobattle': { title: 'Geobattle', image: `geobattle.png`, text: `É um jogo multiplayer que tem o objetivo de acertar o máximo de questões sobre Geografia. Eu fiz esse jogo para uma exposição sobre Geografia no Ensino Fundamental II.`, github: `https://github.com/Windows87/geobattle/`, languages: ['ReactJS', 'NodeJS', 'Socket.io', 'neDB', '2018'] },
  'rnmaps': { title: 'RNMaps', image: `rnmaps.png`, text: `É um aplicativo de exemplo do Google Maps SDK para React Native. No aplicativo você pode marcar pontos com ícones.`, github: `https://github.com/Windows87/RNMaps`, languages: ['React-Native', 'NodeJS', 'MongoDB', 'Set/2018'] },
  'reactnotes': { title: 'React Notes', image: `reactnotes.png`, text: `É uma aplicação desktop para notas. Você pode baixar <a href="http://download1640.mediafire.com/g5sqwhvudpgg/65g3e1474fsrqr8/setup32.exe"><b>aqui para Windows XP+ (32 bit)</b></a> ou <a href="http://download2263.mediafire.com/s1fgfp4qg6cg/2c0ici4dz0leou8/setup64.exe"><b>Windows XP+ (64 Bits)</b></a>.`, github: `https://github.com/Windows87/react-notes/`, languages: ['ReactJS', 'NodeJS', 'NWjs', 'neDB', 'Ago/2018'] },
  'library': { title: 'Library', image: `library.png`, text: `Esse é um sistema de biblioteca completo que eu desenvolvi para a minha escola quando estava no Ensino Fundamental II. Você pode fazer o download <a href="http://www.mediafire.com/file/mma5n5z0a2mea3j/Setup.exe/file"><b>aqui para Windows 7+</b></a> e fazer o download o <a href="http://www.mediafire.com/file/5y046q0oy382q12/Manual_do_Sistema_da_Biblioteca.pdf/file"><b>manual aqui</b></a>.`, github: `https://github.com/Windows87/biblioteca/`, languages: ['ReactJS', 'NodeJS', 'Electron', 'Mai/2018'] },
  'contactlist': { title: 'NWjs Contact List', image: `contactlist.png`, text: `Essa é uma aplicação de lista de contatos.`, github: `https://github.com/Windows87/nwjs-contact-list/`, languages: ['HTML', 'CSS', 'Javascript', 'NodeJS', 'NWjs', 'neDB', 'Ago/2018'] },
  'quotesgenerator': { title: 'Quotes Generator', image: `quotesgenerator.png`, text: `É um módulo node que gera uma foto com uma imagem de fundo com uma citação com palavras destacadas.`, github: `https://github.com/Windows87/quotes-photos-generator`, languages: ['NodeJS', 'Jul/2019'] },
  'pptxmaker': { title: 'PPTX Maker', text: `É uma aplicação para gerar apresentações powerpoint automáticas. Não sou o dono do repositório mas sou contribuidor.`, github: `https://github.com/LeoFC97/pptx-maker`, languages: ['NodeJS', 'Jul/2019'] },
  'trucocraft': { title: 'Trucocraft', image: `trucocraft.png`, text: `É um plugin de Truco para Minecraft usando Javascript e Scriptcraft.`, languages: ['Javascript', 'ScriptCraft', 'Mar/2019'] },
  'sciencequotes': { title: 'Science Quotes', text: `Essa é uma API REST que você pode ler, criar, atualizar e deletar citações sobre temas relacionados a ciência, como astronomia, matemática e física.`, github: `https://github.com/Windows87/science-quotes`, languages: ['NodeJS', 'MongoDB', 'Jul/2019'] },
  'wikimobile': { title: 'The Wikipedia Article Game Mobile', image: `wikimobile.png`, text: `Esse é um jogo que você deve acertar qual artigo apresenta mais visualizações baseado somente na sua imagem e nome. É a versão mobile do <a href="https://windows87.github.io/the-wikipedia-article-game/">The Wikipedia Article Game</a>.`, github: `https://github.com/Windows87/the-wikipedia-article-game-mobile/`, languages: ['React-Native', 'Out/2019'] }
};

function setProjectFullScreen(projectId) {
  const project = projects[projectId];

  const body = document.querySelector('body');
  const pagerProjectBackground = document.querySelector('#pager-project-background');
  const pagerProjectTitle = document.querySelector('#pager-project-background header span');
  const pagerProjectGithubLink = document.querySelector('#paper-project-github-link');
  const pagerProjectGooglePlayLink = document.querySelector('#paper-project-google-play-link');  
  const pagerProjectImage = document.querySelector('#pager-project-image');
  const pagerProjectSpan = document.querySelector('#paper-project-span');
  const pagerProjectArticle = document.querySelector('#pager-project-background article p');
  const pagerProjectLanguages = document.querySelector('#pager-project-languages');

  body.style['overflow'] = 'hidden';
  pagerProjectGithubLink.style['display'] = 'block';
  pagerProjectGooglePlayLink.style['display'] = 'block';

  if(!project.github)
    pagerProjectGithubLink.style['display'] = 'none';

  if(!project.googlePlay)
    pagerProjectGooglePlayLink.style['display'] = 'none';    

  pagerProjectBackground.style['display'] = 'flex';
  
  if(project.image) {
    pagerProjectImage.style['display'] = 'block';
    pagerProjectImage.src = `../img/full-projects/${project.image}`;
  } else {
    pagerProjectImage.style['display'] = 'none';
  }

  pagerProjectTitle.innerText = project.title;
  pagerProjectArticle.innerHTML = project.text;
  pagerProjectGithubLink.href = project.github;
  pagerProjectGooglePlayLink.href = project.googlePlay;

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