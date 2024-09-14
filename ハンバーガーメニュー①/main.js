'use strict';

const hamburgerBtn = document.querySelector('.hamburgerBtn');
const container= document.querySelector('.container');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  container.classList.toggle('active');
});