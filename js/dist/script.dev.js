'use strict';

function ibg() {
  var ibg = document.querySelectorAll("._ibg");

  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();
new Swiper('.swiper-main-header__container', {
  navigation: {
    nextEl: '.arrows-swiper-main__arrows-right',
    prevEl: '.arrows-swiper-main__arrows-left'
  },
  pagination: {
    el: '.arrows-swiper-main__pagination',
    clickable: true,
    type: 'fraction'
  },
  grabCursor: true,
  touchAngle: 40,
  loop: true
});