const pagerButtons = document.querySelectorAll('.pager-buttons button');
const pagerProjects = document.querySelectorAll('.pager-projects');

selectPagerButton(pagerButtons[0]);
showPagerProject(pagerProjects[0]);

pagerButtons.forEach(pagerButton => {
  pagerButton.addEventListener('click', () => {
  	hideAllPagerButtons();
  	selectPagerButton(pagerButton);

  	pagerProjects.forEach(pagerProject => {
  	  if(pagerProject.getAttribute('for') === pagerButton.id)
  	  	showPagerProject(pagerProject);
  	  else
  	  	hidePagerProject(pagerProject);
  	});
  });
});

function selectPagerButton(button) {
  button.classList.add('pager-buttonSelected');
}

function showPagerProject(pagerProject) {
  pagerProject.style.display = 'block';
}

function hidePagerProject(pagerProject) {
  pagerProject.style.display = 'none';
}

function hideAllPagerButtons() {
  pagerButtons.forEach(pagerButton => pagerButton.classList.remove('pager-buttonSelected'));
}