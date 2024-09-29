const menu = [
     {name: 'salata', price: 15, category:'ara'},
     {name: 'çorba', price: 20, category:'sıcak'},
];

const categories = [...new Set(menu.map(item => item.category))];

categories.forEach(categories => {
    const option = document.createElement('option');
    option.value 
});