const filter = document.querySelector('.filter'); // Kategori filtresi
const menuList = document.querySelector('.menuList'); // Menü listesi
const totalPriceElement = document.querySelector('.totalPrice'); // Toplam fiyat göstergesi

const menu = [
    { name: 'pizza', price: 25, category: 'soğuk' }, // Fiyatları string yerine number yaptım
    { name: 'salata', price: 15, category: 'ara' },
    { name: 'çorba', price: 20, category: 'sıcak' }
];

// Kategorileri filtreleme menüsüne ekleme
menu.forEach(item => {
    const option = document.createElement('option');
    option.value = item.category; // Kategori değeri
    option.textContent = item.category; // Kategori metni
    filter.appendChild(option); // Filtreye ekleme
});

// Menü öğelerini ekrana yazdıran fonksiyon
function renderMenu(filteredMenu) {
    menuList.innerHTML = ''; // Mevcut listeyi temizle
    filteredMenu.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} TL`; // Her öğeyi ekrana yazdır
        menuList.appendChild(li);
    });

    // Toplam fiyatı hesaplama
    const total = filteredMenu.reduce((total, item) => total + item.price, 0); // Toplam fiyat
    totalPriceElement.textContent = `${total} TL`; // Toplam fiyatı ekrana yazdır
}

// Tüm menüyü başlangıçta göster
renderMenu(menu);

// Kategori filtresine göre menüyü filtreleme
filter.addEventListener('change', () => {
    const selectedCategory = filter.value; // Seçilen kategori
    const filteredMenu = selectedCategory === 'all' 
        ? menu // Eğer "Tüm Kategoriler" seçildiyse tüm menüyü göster
        : menu.filter(item => item.category === selectedCategory); // Kategoriyi filtrele
    renderMenu(filteredMenu); // Filtrelenmiş menüyü render et
});
