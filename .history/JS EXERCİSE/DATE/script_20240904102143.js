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

curre.style.color = '#4CAF50'; // Yazı rengi
curre.style.fontSize = '20px'; // Yazı boyutu
curre.style.fontFamily = 'Arial, sans-serif'; // Yazı tipi
curre.style.backgroundColor = '#f0f0f0'; // Arka plan rengi
curre.style.padding = '10px'; // İç boşluk
curre.style.border = '1px solid #ddd'; // Kenarlık
curre.style.borderRadius = '5px'; // Köşe yuvarlama
curre.style.textAlign = 'center'; // Metni ortala
curre.style.margin = '20px'; // Dış boşluk

console.log(formattedDate);