'use strict';

const div = document.querySelectorAll('dl>div');

div.forEach((element) => {
  element.addEventListener('click',()=> {
    element.classList.toggle('open');
    div.forEach((el) => {
      if(el !== element){
        el.classList.remove('open');
      }
    });
  })
})