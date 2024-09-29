const menu = [
     {name: 'salata', price: 15, category:'ara'},
     {name: 'çorba', price: 20, category:'sıcak'},
];

const categories = [...new Set(menu.map(item => item.category))];

categories.forEach(category => {
    const option = document.createElement('option');
    option.value =  category
    option.textContent = category
    filter.appendChild(option);
});

function renderMenu(filteredMenu) {
    menuList.innerHTML = '';
    filteredMenu.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} ${item.price} TL`;
        menuList.appendChild(li);
    });

    const total = filteredMenu.reduce((total, item) => total + item.price, 0);
    totalPriceElement.textContent = `${total} TL`;
}

renderMenu();


filter.addEventListener('change', ()=> {
    const selectedCategory = filter.value;
    const filteredMenu = selectedCategory === 'all'
    ? menu
    :menu.filter(item => item.category === selectedCategory)
    renderMenu(filteredMenu)
})