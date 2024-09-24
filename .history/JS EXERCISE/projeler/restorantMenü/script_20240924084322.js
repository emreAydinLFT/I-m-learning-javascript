const menu = [
    { name: 'Pizza', price: 25, category: 'Ana Yemek' },
    { name: 'Salata', price: 15, category: 'Ara Sıcak' },
    // ... diğer yemekler
];

const menuList = document.getElementById('menuList');
const categoryFilter = document.getElementById('categoryFilter');
const totalPriceElement = document.getElementById('totalPrice');
const mostPopularElement = document.getElementById('mostPopular');

// Tüm kategorileri filtreye ekle
menu.forEach(item => {
    const option = document.createElement('option');
    option.value = item.category;
    option.textContent = item.category;
    categoryFilter.appendChild(option);
});

// Menüyü ilk kez render et
function renderMenu(filteredMenu) {
    menuList.innerHTML = '';
    filteredMenu.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} TL`;
        menuList.appendChild(li);
    });

    // Toplam fiyatı hesapla
    const total = filteredMenu.reduce((total, item) => total + item.price, 0);
    totalPriceElement.textContent = total;

    // En çok tercih edilen yemeği bul (bu kısım daha gelişmiş bir mantık gerektirebilir)
    // Örneğin, bir nesne içinde her yemeğin kaç kez seçildiğini tutabiliriz
};

// Tüm menüyü başlangıçta göster
renderMenu(menu);

// Kategori filtresini değiştirme eventi
categoryFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;
    const filteredMenu = menu.filter(item => item.category === selectedCategory || selectedCategory === 'all');
    renderMenu(filteredMenu);
});