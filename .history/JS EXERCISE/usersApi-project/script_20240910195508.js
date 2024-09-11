const api = "https://jsonplaceholder.typicode.com/users";

async function fetchAndDisplayUsers() {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error('Ağ yanıtı başarısız: ' + response.status);
    }
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error('Hata:', error);
  }
}

function displayUsers(users) {
  const container = document.getElementById('user-cards-container');
  const template = document.getElementById('user-card-template');

  users.forEach(user => {
    // Şablonu kopyala
    const card = document.importNode(template.content, true);

    // Kart içindeki öğeleri doldur
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

// Sayfa yüklendiğinde kullanıcıları çek ve göster
fetchAndDisplayUsers();
