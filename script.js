var list = document.querySelector('.list');
var form = document.querySelector('.form');
var input = document.querySelector('.input');
var text = document.querySelector('.text-for-explain')

let array = [];

form.addEventListener('submit', function(evt){
  evt.preventDefault();

  if (array.includes(input.value)) {
    text.textContent  = 'Bu narsani yozgan edingiz!';
    item.textContent ='';
  }


  if (input.value == 0) {
    text.textContent = 'Bozorlik royhatini kiriting!';
    array = [];
    return;
  } 
  if (1 == 1) {
    array.push(input.value);
    text.textContent = '';
  }

  let item = document.createElement('li');



    for (book of array) {
      list.appendChild(item);
      item.textContent = '';
      item.textContent = book;
    };

    input.value = '';
});




