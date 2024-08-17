'use strict'

const modal = document.querySelector('.modal');
document.querySelector('button').addEventListener('click',() => {
  modal.classList.add('active');
});

document.querySelector('.close').addEventListener('click',() => {
  modal.classList.remove('active');
});

document.querySelector('.modal').addEventListener('click',(event) =>{
  // console.log(event.target);
  // console.log(event.currentTarget);
  if(!event.target.closest('.modal_inner')){
    modal.classList.remove('active');
  }
});