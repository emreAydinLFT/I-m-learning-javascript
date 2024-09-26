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
    menuList.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `${category.name} - ${category.price} TL`;
    menuList.appendChild(li);
}

const total = filteredMenu.reduce((total, category) => total + category.price, 0);
totalPriceElement.textContent = total;


renderMenu(menu);

categoryFilter.addEventListener('chan')
