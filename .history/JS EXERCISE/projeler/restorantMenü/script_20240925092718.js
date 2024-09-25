// Yemeklerin seçilme sayısını tutacak bir nesne
const popularityCounts = {};

// Menü öğelerini ilk kez oluştururken bu nesneyi de güncelleyelim
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

// Menüyi render etme fonksiyonunu güncelleyelim
function renderMenu(filteredMenu) {
    // ... diğer kodlar ...

    // En çok tercih edilen yemeği bul ve göster
    const mostPopular = getMostPopularItem();
    mostPopularElement.textContent = mostPopular ? `En çok tercih edilen: ${mostPopular}` : "Henüz bir yemek seçilmedi";
}