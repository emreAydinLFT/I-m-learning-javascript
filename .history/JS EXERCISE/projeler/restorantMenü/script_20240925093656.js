// Menü öğelerini ve özelliklerini tutan bir dizi
const menu = [
    { name: 'Pizza', price: 25, category: 'Ana Yemek' },
    { name: 'Salata', price: 15, category: 'Ara Sıcak' },
    // ... diğer yemekler
  ];
  
  // Her yemeğin seçilme sayısını tutan bir nesne
  const popularityCounts = {};
  
  // HTML sayfadaki elementlere referanslar
  const menuList = document.getElementById('menuList'); // Menüyü göstereceğimiz liste
  const categoryFilter = document.getElementById('categoryFilter'); // Kategori filtresi
  const totalPriceElement = document.getElementById('totalPrice'); // Toplam fiyatı göstereceğimiz yer
  const mostPopularElement = document.getElementById('mostPopular'); // En popüler yemeği göstereceğimiz yer
  
  // Menüdeki her öğe için:
  menu.forEach(item => {
    // Seçilme sayısını 0 olarak başlat
    popularityCounts[item.name] = 0;
  
    // Kategori filtresine bir seçenek ekle
    const option = document.createElement('option');
    option.value = item.category; // Seçeneğin değeri (kategorisi)
    option.textContent = item.category; // Seçeneğin gösterilecek metni
    categoryFilter.appendChild(option); // Filtreye seçeneği ekle
  });
  
  // Bir yemeğin popülerliğini artırma fonksiyonu
  function incrementPopularity(itemName) {
    popularityCounts[itemName]++; // Belirtilen yemeğin seçilme sayısını artır
  }
  
  // En popüler yemeği bulma fonksiyonu (bu kısım daha detaylı doldurulabilir)
  function getMostPopularItem() {
    // ... en popüler öğeyi bulma mantığı ...
  }
  
  // Menüyi ekranda gösterme ve güncelleme fonksiyonu
  function renderMenu(filteredMenu) {
    // Menü listesini temizle
    menuList.innerHTML = '';
  
    // Filtrelenmiş menüdeki her öğe için:
    filteredMenu.forEach(item => {
      // Liste öğesi oluştur
      const li = document.createElement('li');
      // Liste öğesine yemek adı, fiyatı ve seçme butonu ekle
      li.innerHTML = `${item.name} - ${item.price} TL <button class="select-button" data-item="${item.name}">Seç</button>`;
      // Listeye öğeyi ekle
      menuList.appendChild(li);
    });
  
    // Tüm seçme butonlarına tıklama eventi ekle
    const selectButtons = document.querySelectorAll('.select-button');
    selectButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Tıklanan butona ait yemeğin adını al
        const itemName = button.dataset.item;
        // Yemeğin popülerliğini artır
        incrementPopularity(itemName);
        // Menüyi yeniden oluştur (isteğe bağlı)
        renderMenu(filteredMenu);
      });
    });
  
    // ... diğer hesaplamalar ve güncellemeler (örneğin, toplam fiyat, en popüler yemek) ...
  }
  
  // İlk olarak tüm menüyü göster
  renderMenu(menu);
  
  // Kategori filtresinde değişiklik olduğunda menüyü güncelle
  categoryFilter.addEventListener('change', () => {
    // ... kategori filtresine göre filtreleme ve render etme ...
  });