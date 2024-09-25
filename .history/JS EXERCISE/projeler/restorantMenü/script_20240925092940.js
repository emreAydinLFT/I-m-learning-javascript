const menu = [
    // ... mevcut menü öğeleriniz ...
  ];
  
  const popularityCounts = {}; // Yemeklerin popülerliklerini tutacak nesne
  
  const menuList = document.getElementById('menuList');
  // ... diğer elementler ...
  
  // Menü öğelerini ilk kez oluştururken popülerlik nesnesini güncelleyelim
  menu.forEach(item => {
    popularityCounts[item.name] = 0;
    // ... diğer kodlar ...
  });
  
  // Bir yemeğin seçildiğinde çağrılacak fonksiyon
  function incrementPopularity(itemName) {
    popularityCounts[itemName]++;
  }
  
  // En çok tercih edilen yemeği bulan fonksiyon
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
  
  // Menüyü render etme fonksiyonunu güncelleyelim
  function renderMenu(filteredMenu) {
    // ... diğer kodlar ...
  
    // En çok tercih edilen yemeği bul ve göster
    const mostPopular = getMostPopularItem();
    mostPopularElement.textContent = mostPopular ? `En çok tercih edilen: ${mostPopular}` : "Henüz bir yemek seçilmedi";
  }
  
  // ... diğer kodlar ...
  
  // Örneğin, bir butona tıklandığında yemeğin popülerliğini artırma
  const pizzaButton = document.getElementById('pizzaButton');
  pizzaButton.addEventListener('click', () => {
    incrementPopularity('Pizza');
    renderMenu(filteredMenu); // Menüyi tekrar render et
  });