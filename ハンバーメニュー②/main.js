'use strict';

const nav = document.querySelector('#navArea');
const btn = document.querySelector('.toggleBtn');
const mask = document.querySelector('#mask');

btn.addEventListener('click', () => {
  nav.classList.toggle('open');
})

mask.addEventListener('click',() => {
  nav.classList.toggle('open');
})
