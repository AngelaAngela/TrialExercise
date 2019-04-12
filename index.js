
//User INPUT
let listItem = document.querySelectorAll('li');

//ADD ITEM
const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

//list items 
const listItems = document.getElementsByTagName('li');

addItemButton.addEventListener('click', () => {
    let list = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    let appendedItem = list.appendChild(li);
    addItemInput.value = '';
  });















