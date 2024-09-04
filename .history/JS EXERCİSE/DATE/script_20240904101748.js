const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

const formattedDate = `${day}.${month}.${year}`;

document.getElementById('current-date').textContent = `Bugünün tarihi: ${formattedDate}`;

for.style.color = '#4CAF50'; // Yazı rengi
for.style.fontSize = '20px'; // Yazı boyutu
for.style.fontFamily = 'Arial, sans-serif'; // Yazı tipi
for.style.backgroundColor = '#f0f0f0'; // Arka plan rengi
for.style.padding = '10px'; // İç boşluk
for.style.border = '1px solid #ddd'; // Kenarlık
for.style.borderRadius = '5px'; // Köşe yuvarlama
for.style.textAlign = 'center'; // Metni ortala
for.style.margin = '20px'; // Dış boşluk

console.log(formattedDate);