const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

const formattedDate = `${day}.${month}.${year}`;

document.getElementById('current-date').textContent = `Bugünün tarihi: ${formattedDate}`;

dateElement.style.color = '#4CAF50'; // Yazı rengi
dateElement.style.fontSize = '20px'; // Yazı boyutu
dateElement.style.fontFamily = 'Arial, sans-serif'; // Yazı tipi
dateElement.style.backgroundColor = '#f0f0f0'; // Arka plan rengi
dateElement.style.padding = '10px'; // İç boşluk
dateElement.style.border = '1px solid #ddd'; // Kenarlık
dateElement.style.borderRadius = '5px'; // Köşe yuvarlama
dateElement.style.textAlign = 'center'; // Metni ortala
dateElement.style.margin = '20px'; // Dış boşluk

console.log(formattedDate);