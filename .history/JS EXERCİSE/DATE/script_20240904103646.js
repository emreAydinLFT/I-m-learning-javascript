function updateDateTime() {
const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();

// Tarihi formatla
const formattedDate = `${day}.${month}.${year}-${hour}.${minute}.${second}`;

// DOM'daki 'current-date' elementini seç
const dataElement = document.getElementById('current-date');

// Tarihi DOM'a yaz
dataElement.textContent = `Bugünün tarihi: ${formattedDate}`;
}

// Sayfa yüklendiğinde tarihi güncelle
updateDateTime();
// Her saniye tarihi güncelle
setInterval(updateDateTime,1000);


const dataElement = document.getElementById('current-date');
dataElement.style.color = '#4CAF50'; // Yazı rengi
dataElement.style.fontSize = '20px'; // Yazı boyutu
dataElement.style.fontFamily = 'Arial, sans-serif'; // Yazı tipi
dataElement.style.backgroundColor = '#f0f0f0'; // Arka plan rengi
dataElement.style.padding = '10px'; // İç boşluk
dataElement.style.border = '1px solid #ddd'; // Kenarlık
dataElement.style.borderRadius = '5px'; // Köşe yuvarlama
dataElement.style.textAlign = 'center'; // Metni ortala
dataElement.style.margin = '20px'; // Dış boşluk

console.log(dataElement);


//** */ updateDateTime Fonksiyonu: Tarih ve saati güncelleyip current-date elementine yazan bir fonksiyon tanımladık.
//* setInterval: Bu fonksiyon, belirtilen aralıklarla (1000 milisaniye = 1 saniye) updateDateTime fonksiyonunu çağırarak sürekli güncel tarihle güncellenmiş bilgileri gösterecek.
//* dataElement.style: Stil özelliklerini bir kez sayfa yüklendiğinde uyguluyoruz, çünkü stil değişmeyecek.