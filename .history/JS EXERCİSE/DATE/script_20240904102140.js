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

c.style.color = '#4CAF50'; // Yazı rengi
c.style.fontSize = '20px'; // Yazı boyutu
c.style.fontFamily = 'Arial, sans-serif'; // Yazı tipi
c.style.backgroundColor = '#f0f0f0'; // Arka plan rengi
c.style.padding = '10px'; // İç boşluk
c.style.border = '1px solid #ddd'; // Kenarlık
c.style.borderRadius = '5px'; // Köşe yuvarlama
c.style.textAlign = 'center'; // Metni ortala
c.style.margin = '20px'; // Dış boşluk

console.log(formattedDate);