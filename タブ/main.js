'use strict';

const items = document.querySelectorAll('.item');
const contents =document.querySelectorAll('.content');

items.forEach((item,index) => {
  item.addEventListener('click', () => {
    items.forEach((element) => {
      if(item !==element){
        element.classList.remove('active');
      }
    })
    item.classList.add('active');
    contents.forEach((content) => {
      if(contents[index] !== content){
        content.classList.remove('show');
      }
    })
    contents[index].classList.add('show');
  })
})