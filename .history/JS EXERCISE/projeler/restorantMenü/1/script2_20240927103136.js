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

}