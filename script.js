// let obj1 = document.getElementById('obj-1');

// obj1.addEventListener('click', move());

// function move() {
//   obj1.style.animation = rotate 4s;
// }

document.addEventListener('click', function() {
  let obj1 = document.getElementById('obj-1');
    obj1.style.animation = 'rotate-1 5s linear infinite';
    obj1.style.display = 'block';
  let obj2 = document.getElementById('obj-2');
    obj2.style.animation = 'rotate-2 5s linear infinite';  
    obj2.style.display = 'block';
  let click = document.getElementById('click-me');
    click.style.display = 'none';  
 
});


