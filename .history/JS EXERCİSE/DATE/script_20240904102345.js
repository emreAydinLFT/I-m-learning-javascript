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

data.style.color = '#4CAF50'; // Yazı rengi
data.style.fontSize = '20px'; // Yazı boyutu
data.style.fontFamily = 'Arial, sans-serif'; // Yazı tipi
data.style.backgroundColor = '#f0f0f0'; // Arka plan rengi
data.style.padding = '10px'; // İç boşluk
data.style.border = '1px solid #ddd'; // Kenarlık
data.style.borderRadius = '5px'; // Köşe yuvarlama
data.style.textAlign = 'center'; // Metni ortala
data.style.margin = '20px'; // Dış boşluk

console.log(formattedDate);