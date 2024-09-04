// Mevcut tarihi al
const now = new Date();

// Yıl, ay, gün bilgilerini al
const year = now.getFullYear();
const month = now.getMonth() + 1; // Ayı 1 ile başlatmak için +1
const day = now.getDate();

// Tarihi formatla
const formattedDate = `${day}/${month}/${year}`;

// DOM'daki 'current-date' elementini seç
const dateElement = document.getElementById('current-date');

// Tarihi DOM'a yaz
dateElement.textContent = `Bugünün tarihi: ${formattedDate}`;

// Stil özelliklerini JavaScript ile ekle
dateElement.style.color = '#4CAF50'; // Yazı rengi
dateElement.style.fontSize = '20px'; // Yazı boyutu
dateElement.style.fontFamily = 'Arial, sans-serif'; // Yazı tipi
dateElement.style.backgroundColor = '#f0f0f0'; // Arka plan rengi
dateElement.style.padding = '10px'; // İç boşluk
dateElement.style.border = '1px solid #ddd'; // Kenarlık
dateElement.style.borderRadius = '5px'; // Köşe yuvarlama
dateElement.style.textAlign = 'center'; // Metni ortala
dateElement.style.margin = '20px'; // Dış boşluk
