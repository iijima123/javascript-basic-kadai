'use strict';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

  console.log(swiper.activeIndex);
  console.log(swiper.height);
  swiper.on('slideChangeTransitionEnd', () => {
    console.log(`現在のスライドは${swiper.activeIndex+1}枚目です。`);
    if(swiper.activeIndex === 2){
      document.querySelector('.sliderButton').style.display = 'block';
    }else{
      document.querySelector('.sliderButton').style.display = 'none' ;
    };
  });
  swiper.on('click', () => {
    alert('スライドがクリックされました');
  });



