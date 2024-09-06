'use strict';

const subSwiper = new Swiper('.js-sub-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  slidesPerView: 4,
  slidesPerGroup:2,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


const mainSwiper = new Swiper('.js-main-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 5000,
 
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs:{
    swiper:subSwiper
  },

});




