'use strict';
let scrollBlock = document.querySelector('.scroll-block');
let cardList = document.getElementById('card-list');
let mapBlock = document.querySelector('.map');
let dealerList = document.querySelector('.map').querySelector('.row');

		cardList.addEventListener('mouseover',(e) => {
			document.body.classList.add('noScroll');
      scrollBlock.classList.remove('active')
		});
		cardList.addEventListener('mouseout',(e) => {
			document.body.classList.remove('noScroll');
      scrollBlock.classList.add('active');
		});
    dealerList.addEventListener('mouseover',(e) => {
      mapBlock.classList.remove('active');
    });
    dealerList.addEventListener('mouseout',(e) => {
      mapBlock.classList.add('active');
    });
    
		cardList.addEventListener('wheel', (e) => {
      console.log(e)
      if (e.deltaY == 3) {
        cardList.scrollLeft += e.deltaY*15;
      }
      else if (e.deltaY == -3) {
        cardList.scrollLeft += e.deltaY*15;
      }
    cardList.scrollLeft += e.deltaY;
    console.log(e.deltaY);



    let scrollBlock = document.querySelector('.scroll-block');
    let flipBlock = document.querySelector('.flip-block');
    let brands = document.querySelector('.brands');
    let maxScroll = cardList.scrollWidth - cardList.clientWidth;
    console.log(cardList.scrollLeft);
    console.log(maxScroll);

    if (cardList.scrollLeft >= maxScroll-1 ) {
      scrollBlock.classList.add('active');
      if (hasClass(flipBlock, 'active')) {
        scrollBlock.classList.remove('active');
      }
    }
    else if (cardList.scrollLeft == 0) {
      scrollBlock.classList.add('active');
      if (hasClass(brands, 'active')) {
        scrollBlock.classList.remove('active');
      }
    }
    console.log(cardList.scrollLeft);
})

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}


let hhblock = document.querySelector('.vacancies-list');

let mapbutton = document.querySelector('.map-button');

let header_btn = document.querySelector('.header-menu');
let rigthmenu = document.querySelector('.right-menu-mobile');
let rightmenu_close = document.querySelector('.right-menu-mobile__close');

header_btn.addEventListener('click',(e) => {
    console.log(rigthmenu)  
    rigthmenu.style.transform = "translateX(0rem)";
});

rightmenu_close.addEventListener('click',(e) => {
  rigthmenu.style.transform = "translateX(100rem)";
});

fetch('https://api.hh.ru/vacancies?employer_id=2127980')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let vacancies = data.items;
      vacancies.forEach((item) => {
        let temp = document.createElement('div');
        temp.className = ('vacancies-item');
        let content = `<a href="${item.alternate_url}" target="_blank">${item.name}</a>\n<span>${item.area.name}</span>`;
        temp.innerHTML = content;
        // temp.innerHTML = `<a href="${item.alternate_url}" class="vacancies-item">${item.name}</a>`
        hhblock.append(temp);

      })
  });



