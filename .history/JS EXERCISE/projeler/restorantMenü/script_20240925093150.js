const menu = [
    { name: 'Pizza', price: 25, category: 'Ana Yemek' },
    { name: 'Salata', price: 15, category: 'Ara Sıcak' },
    // ... diğer yemekler
  ];
  
  const popularityCounts = {};
  
  const menuList = document.getElementById('menuList');
  const categoryFilter = document.getElementById('categoryFilter');
  const totalPriceElement = document.getElementById('totalPrice');
  const mostPopularElement = document.getElementById('mostPopular');
  
  menu.forEach(item => {
    popularityCounts[item.name] = 0;
    const option = document.createElement('option');
    option.value = item.category;
    option.textContent = item.category;
    categoryFilter.appendChild(option);
  });
  
  function incrementPopularity(itemName) {
    popularityCounts[itemName]++;
  }
  
  function getMostPopularItem() {
    let mostPopular = null;
    let maxCount = 0;
    for (const item in popularityCounts) {
      if (popularityCounts[item] > maxCount) {
        mostPopular = item;
        maxCount = popularityCounts[item];
      }
    }
    return mostPopular;
  }
  
  function renderMenu(filteredMenu) {
    menuList.innerHTML = '';
    filteredMenu.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price} TL <button data-item="${item.name}">Seç</button>`;
      menuList.appendChild(li);
    });
  
    const total = filteredMenu.reduce((total, item) => total + item.price, 0);
    totalPriceElement.textContent = `Toplam Fiyat: ${total} TL`;
  
    const mostPopular = getMostPopularItem();
    mostPopularElement.textContent = mostPopular ? `En Çok Tercih Edilen: ${mostPopular}` : "Henüz bir yemek seçilmedi";
  
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {
        const itemName = button.dataset.item;
        incrementPopularity(itemName);
        renderMenu(filteredMenu);
      });
    });
  }
  
  renderMenu(menu);
  
  categoryFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;
    const filteredMenu = menu.filter(item => item.category === selectedCategory || selectedCategory === 'all');
    renderMenu(filteredMenu);
  });