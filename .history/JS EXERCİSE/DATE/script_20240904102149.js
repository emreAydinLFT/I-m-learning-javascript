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

current.style.color = '#4CAF50'; // Yazı rengi
current.style.fontSize = '20px'; // Yazı boyutu
current.style.fontFamily = 'Arial, sans-serif'; // Yazı tipi
current.style.backgroundColor = '#f0f0f0'; // Arka plan rengi
current.style.padding = '10px'; // İç boşluk
current.style.border = '1px solid #ddd'; // Kenarlık
current.style.borderRadius = '5px'; // Köşe yuvarlama
current.style.textAlign = 'center'; // Metni ortala
current.style.margin = '20px'; // Dış boşluk

console.log(formattedDate);