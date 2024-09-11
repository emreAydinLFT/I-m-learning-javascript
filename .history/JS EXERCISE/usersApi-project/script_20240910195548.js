// API'nin URL'si
const api = "https://jsonplaceholder.typicode.com/users";

// Asenkron fonksiyon, kullanıcı verilerini API'den çekip işlemek için
async function fetchAndDisplayUsers() {
  try {
    // API'ye istek gönderilir
    const response = await fetch(api);

    // Yanıtın başarılı olup olmadığını kontrol et
    if (!response.ok) {
      // Eğer yanıt başarılı değilse, bir hata fırlat
      throw new Error('Ağ yanıtı başarısız: ' + response.status);
    }

    // Yanıtı JSON formatına dönüştür
    const users = await response.json();
    
    // JSON verilerini ekranda göstermek için displayUsers fonksiyonunu çağır
    displayUsers(users);
  } catch (error) {
    // Hata oluşursa, hata mesajını konsola yazdır
    console.error('Hata:', error);
  }
}

// Kullanıcıları ekranda göstermek için fonksiyon
function displayUsers(users) {
  // Kartları yerleştireceğimiz konteyner
  const container = document.getElementById('user-cards-container');

  // HTML şablonunu al
  const template = document.getElementById('user-card-template');

  // Her kullanıcı için döngü başlat
  users.forEach(user => {
    // Şablonu kopyala
    const card = document.importNode(template.content, true);

    // Şablondaki kart içindeki öğelere veri ekle
    card.querySelector('.name').textContent = `İsim: ${user.name}`;
    card.querySelector('.username').textContent = `Kullanıcı Adı: ${user.username}`;
    card.querySelector('.email').textContent = `Email: ${user.email}`;
    card.querySelector('.street').textContent = `Sokak: ${user.address.street}`;
    card.querySelector('.suite').textContent = `Kat: ${user.address.suite}`;
    card.querySelector('.city').textContent = `Şehir: ${user.address.city}`;
    card.querySelector('.zipcode').textContent = `Posta Kodu: ${user.address.zipcode}`;

    // Kartı konteynıra ekle
    container.appendChild(card);
  });
}

// Sayfa yüklendiğinde kullanıcıları çekip göster
fetchAndDisplayUsers();
