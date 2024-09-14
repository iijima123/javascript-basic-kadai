'use strict';

window.addEventListener('scroll', () => {
  const scroll =window.scrollY;
  // console.log(scroll);
  if( scroll >500){
    document.getElementById('goTop').classList.add('visible');
  }else{
    document.getElementById('goTop').classList.remove('visible');
  }
});

const humBtn = document.querySelector('.humBtn');
const container =document.querySelector('.container');

humBtn.addEventListener('click', () => {
  humBtn.classList.toggle('active');
  container.classList.toggle('active');
})