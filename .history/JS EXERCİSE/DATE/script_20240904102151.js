const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

// Tarihi formatla
const formattedDate = `${day}.${month}.${year}`;

// DOM'daki 'current-date' elementini seç
const dataElement = document.getElementById('currentDate');

// Tarihi DOM'a yaz
dataElement.textContent = `Bugünün tarihi: ${formattedDate}`;
document.getElementById('current-date').textContent = `Bugünün tarihi: ${formattedDate}`;

current-date.style.color = '#4CAF50'; // Yazı rengi
current-date.style.fontSize = '20px'; // Yazı boyutu
current-date.style.fontFamily = 'Arial, sans-serif'; // Yazı tipi
current-date.style.backgroundColor = '#f0f0f0'; // Arka plan rengi
current-date.style.padding = '10px'; // İç boşluk
current-date.style.border = '1px solid #ddd'; // Kenarlık
current-date.style.borderRadius = '5px'; // Köşe yuvarlama
current-date.style.textAlign = 'center'; // Metni ortala
current-date.style.margin = '20px'; // Dış boşluk

console.log(formattedDate);