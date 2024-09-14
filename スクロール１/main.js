'use strict';

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  // console.log(scroll);
  if(scroll > 300){
    document.getElementById('goTop').classList.add('visible');
  }else{
    document.getElementById('goTop').classList.remove('visible');
  }
});