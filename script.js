let obj1 = document.getElementById('obj-1');
let obj2 = document.getElementById('obj-2');
let button = document.querySelector('.button');
let container = document.querySelector('.container');
let background = document.querySelector('.background');


document.addEventListener('click', init);

function init() {
  obj1.style.display = 'block';
  obj2.style.display = 'block';
  button.style.display = 'flex';  
  container.style.opacity = '.9';
  
  let query = window.matchMedia('(max-width: 600px)');

  if (query.matches) {
    obj1.style.animation = 'rotate-3 10s linear infinite';
    obj2.style.animation = 'rotate-4 10s linear infinite';
  } else {
    obj1.style.animation = 'rotate-1 10s linear infinite';
    obj2.style.animation = 'rotate-2 10s linear infinite';
  }
 }


