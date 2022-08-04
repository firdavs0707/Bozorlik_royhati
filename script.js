var list = document.querySelector('.list');
var form = document.querySelector('.form');
var input = form.querySelector('.input');
var text = document.querySelector('.text-for-explain')

let array = [];

form.addEventListener('submit', function(evt){
  evt.preventDefault();

  
  array = [];
  
  if (input.value == 0) {
    text.textContent = 'Bozorlik royhatini kiriting!';
  } else {
    array.push(input.value);
    text.textContent = '';
  }

  input.value = '';

  console.log(array);
  
  for (book of array) {
    var item = document.createElement('li');
    item.textContent = book;
    list.appendChild(item);
  };
});




