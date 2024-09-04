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

cu.style.color = '#4CAF50'; // Yazı rengi
cu.style.fontSize = '20px'; // Yazı boyutu
cu.style.fontFamily = 'Arial, sans-serif'; // Yazı tipi
cu.style.backgroundColor = '#f0f0f0'; // Arka plan rengi
cu.style.padding = '10px'; // İç boşluk
cu.style.border = '1px solid #ddd'; // Kenarlık
cu.style.borderRadius = '5px'; // Köşe yuvarlama
cu.style.textAlign = 'center'; // Metni ortala
cu.style.margin = '20px'; // Dış boşluk

console.log(formattedDate);