function getGithubData() {
  return new Promise(async (next, reject) => {
  	try {
  	  const call = await fetch(`https://api.github.com/users/Windows87`);
  	  const callRepos = await fetch(`https://api.github.com/users/Windows87/repos`);

  	  const res = await call.json();
  	  const resRepos = await callRepos.json();

  	  res.repos = resRepos;

  	  next(res);
    } catch(error) {
      reject(error);
    }
  });
}

function setReposData(githubData) {
  const reposLanguages = [];
  
  const repoNumberElement = document.querySelector('#repos');
  const reposLanguagesElement = document.querySelector('#repos-languages');

  repoNumberElement.innerText = `${githubData.public_repos} Repositórios Públicos`;

  githubData.repos.forEach(repo => {
  	if(reposLanguages[repo.language])
  	  reposLanguages[repo.language]++;
  	else
  	  reposLanguages[repo.language] = 1;
  });

  console.log(reposLanguages);

  for(let i = 1; i < Object.getOwnPropertyNames(reposLanguages).length; i++) {
  	const repoLanguageElement = document.createElement('span');
  	const lang = Object.getOwnPropertyNames(reposLanguages)[i]; 

  	if(reposLanguages[lang] > 1)
  	  repoLanguageElement.innerText = `${reposLanguages[lang]} repositórios ${lang}`;
  	else
  	  repoLanguageElement.innerText = `${reposLanguages[lang]} repositório ${lang}`;

  	reposLanguagesElement.appendChild(repoLanguageElement);
  }

}

async function setGithubData() {
  try {
  	const githubData = await getGithubData();
  	setReposData(githubData);
  } catch(error) {
  	console.log(error);
  }
}

setGithubData();