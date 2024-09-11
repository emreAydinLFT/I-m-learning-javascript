const api = "https://jsonplaceholder.typicode.com/users";

fetch(api) // Değişken adını kullanarak URL'yi geçiyoruz
  .then(response => response.json()) // Yanıtı JSON'a dönüştürüyoruz
  .then(json => console.log(json)) // JSON verisini konsola yazdırıyoruz
  .catch(error => console.error('Hata:', error)); // Hata durumunda hata mesajı


fu
