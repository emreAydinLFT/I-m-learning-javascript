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


update



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