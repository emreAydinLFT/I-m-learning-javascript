// Mevcut tarihi al
const now = new Date();

// Yıl, ay, gün bilgilerini al
const year = now.getFullYear();
const month = now.getMonth() + 1; // Ayı 1 ile başlatmak için +1
const day = now.getDate();

// Tarihi formatla
const formattedDate = `${day}/${month}/${year}`;

// Tarihi DOM'a yaz
document.getElementById('current-date').textContent = `Bugünün tarihi: ${formattedDate}`;
