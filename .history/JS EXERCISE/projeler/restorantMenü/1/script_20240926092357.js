const filter = document.querySelector('.filter');
const menuList = document.querySelector('.menuList');
const totalPrice = document.querySelector('.totalPrice');


const menu = [
   { name: 'pizza', price: '25', category: 'soğuk' },
   { name: 'salata', price: '25', category: 'ara' },
   { name: 'çorba', price: '25', category: 'sıcak' }
]

menu.forEach(category => {
const option = document.createElement('option');
option.textContent = category
menu.push(option);
})

function renderMenu(filteredMenu){
    menuList
}