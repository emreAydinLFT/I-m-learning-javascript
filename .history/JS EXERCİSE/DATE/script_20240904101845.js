const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

const formattedDate = `${day}.${month}.${year}`;

document.getElementById('current-date').textContent = `Bugünün tarihi: ${formattedDate}`;

formattedDate.style.color = '#4CAF50'; // Yazı rengi
formattedDate.style.fontSize = '20px'; // Yazı boyutu
formattedDate.style.fontFamily = 'Arial, sans-serif'; // Yazı tipi
formattedDate.style.backgroundColor = '#f0f0f0'; // Arka plan rengi
formattedDate.style.padding = '10px'; // İç boşluk
formattedDate.style.border = '1px solid #ddd'; // Kenarlık
formattedDate.style.borderRadius = '5px'; // Köşe yuvarlama
formattedDate.style.textAlign = 'center'; // Metni ortala
formattedDate.style.margin = '20px'; // Dış boşluk

console.log(formattedDate);