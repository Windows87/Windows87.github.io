class List {
  constructor({ elementId, items }) {
    this.element = document.querySelector(`#${elementId}`);
    this.items = items;
    this.itemsShow = items;
    this.showItems();
  }

  filterContains(param, array) {
    const functionFilter = item => {
      let contains = true;
      array.forEach(arrayItem => {
        const containItemInItemParam = item[param].includes(arrayItem);
        if(!containItemInItemParam)
          contains = false;
      });
    };

    this.filter(functionFilter);
  }

  filter(functionFilter) {
    this.itemsShow = this.items.filter(functionFilter);
    this.showItems();
  }

  cleanElementList() {
    this.element.innerHTML = '';
  }

  createItemElement(item) {
    const itemDiv = document.createElement('div');
      const itemBackground = document.createElement('div');
        const chevronLeft = document.createElement('i');
        const chevronRight = document.createElement('i');
      const sectionBetween = document.createElement('div');
        const sectionH3 = document.createElement('h3');
        const sectionIcons = document.createElement('div');
          const githubIcon = document.createElement('a');
          const redirectIcon = document.createElement('a');
      const p = document.createElement('p');
      const tags = document.createElement('ul');

    itemDiv.classList = 'item item-with-background';
      itemBackground.classList = 'item-background';
        chevronLeft.classList = 'fas fa-chevron-left';
        chevronRight.classList = 'fas fa-chevron-right';
      sectionBetween.classList = 'section-between';
      sectionIcons.classList = 'section-icons';
      tags.classList = 'tags-ul';

    itemBackground.setAttribute('numberOfImages', item.images.length);
    itemBackground.setAttribute('images', JSON.stringify(item.images));
    itemBackground.setAttribute('atualImage', 0);

    const setBackgroundImage = number => {
      const images = JSON.parse(itemBackground.getAttribute('images'));
      itemBackground.style['background-image'] = `url(${images[number]})`;
    }

    const setBackgroundAtualImage = number => {
      itemBackground.setAttribute('atualImage', number);
    }
    
    setBackgroundImage(0);

    chevronLeft.addEventListener('click', () => {
      let atualImage = itemBackground.getAttribute('atualImage');
      const isFirstImage = atualImage === '0';
      const numberOfImages = itemBackground.getAttribute('numberOfImages');

      if(isFirstImage) {
        setBackgroundAtualImage(numberOfImages - 1);
        setBackgroundImage(numberOfImages - 1);
        return;
      }

      atualImage--;
      setBackgroundAtualImage(atualImage);
      setBackgroundImage(atualImage);
    });

    chevronRight.addEventListener('click', () => {
      let atualImage = itemBackground.getAttribute('atualImage');
      const numberOfImages = itemBackground.getAttribute('numberOfImages');
      const isLastImage = Number(atualImage) + 1 === Number(numberOfImages);

      if(isLastImage) {
        setBackgroundAtualImage(0);
        setBackgroundImage(0);
        return;
      }
  
        atualImage++;
        setBackgroundAtualImage(atualImage);
        setBackgroundImage(atualImage);
    });

    const hasGithub = item.links.repository;
    const hasRedirect = item.links.redirect;

    sectionH3.innerText = item.name;
    githubIcon.href = item.links.repository;
    githubIcon.target = '_blank'
    githubIcon.innerHTML = `<i class="fab fa-github"></i>`;
    redirectIcon.href = item.links.redirect;
    redirectIcon.target = '_blank';
    redirectIcon.innerHTML = `<i class="fa fa-link"></i>`;
    p.innerText = item.description;

    item.technologies.forEach(tech => {
      const li = document.createElement('li');
      li.innerText = technologies[tech];
      tags.appendChild(li);
    });

    const liData = document.createElement('li');
    liData.innerText = `${months[item.date.getMonth()]}/${item.date.getFullYear()}`;

    itemDiv.appendChild(itemBackground);
      itemBackground.appendChild(chevronLeft);
      itemBackground.appendChild(chevronRight);
    itemDiv.appendChild(sectionBetween);
      sectionBetween.appendChild(sectionH3);
      sectionBetween.appendChild(sectionIcons);
        if(hasGithub)
          sectionIcons.append(githubIcon);
        if(hasRedirect)
          sectionIcons.appendChild(redirectIcon);
    tags.appendChild(liData);
    itemDiv.appendChild(p);
    itemDiv.appendChild(tags);

    return itemDiv;
  }

  createItemsElement() {
    this.itemsShow.forEach(item => this.element.appendChild(this.createItemElement(item)));
  }

  showItems() {
    this.cleanElementList();
    this.createItemsElement();
  }
}