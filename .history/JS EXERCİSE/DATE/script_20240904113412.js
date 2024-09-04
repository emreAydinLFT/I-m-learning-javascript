const monthNames = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
];

function updateDateTime() {
const now = new Date();
const year = now.getFullYear();
const month = monthNames[now.getMonth() + 1];
const day = String(now.getDate()).padStart(2, '0'); // Gün değerini iki basamaklı yap
const hour = now.getHours();
const minute = now.getMinutes();
const second = String(now.getSeconds()).padStart(2, '0'); // Saniye değerini iki basamaklı yap
/*
string.padStart(targetLength, padString)


// Tarihi formatla
const formattedDate = `${day}.${month}.${year}-${hour}.${minute}.${second}`;

// DOM'daki 'current-date' elementini seç
const dataElement = document.getElementById('current-date');

// Tarihi DOM'a yaz
dataElement.textContent = `Bugünün tarihi: ${formattedDate}`;
}

// Sayfa yüklendiğinde tarihi güncelle
updateDateTime();
// Her saniye tarihi güncelle
setInterval(updateDateTime,1000);



// Stilleri uygulama (bir kez yapıyoruz çünkü stiller değişmeyecek)
const dataElement = document.getElementById('current-date');

dataElement.style.color = 'darkBlue'; // Yazı rengi
dataElement.style.fontSize = '40px'; // Yazı boyutu
dataElement.style.fontFamily = 'Arial, sans-serif'; // Yazı tipi
dataElement.style.backgroundColor = 'gray'; // Arka plan rengi
dataElement.style.padding = '10px'; // İç boşluk
dataElement.style.border = '10px solid red'; // Kenarlık
dataElement.style.borderRadius = '50%'; // Köşe yuvarlama
dataElement.style.textAlign = 'center'; // Metni ortala
dataElement.style.margin = '20px'; // Dış boşluk

console.log(dataElement);


//! updateDateTime
//* Fonksiyonu: Tarih ve saati güncelleyip current-date elementine yazan bir fonksiyon tanımladık.
//! setInterval:
//* Bu fonksiyon, belirtilen aralıklarla (1000 milisaniye = 1 saniye) updateDateTime fonksiyonunu çağırarak sürekli güncel tarihle güncellenmiş bilgileri gösterecek.
//! dataElement.style:
//* Stil özelliklerini bir kez sayfa yüklendiğinde uyguluyoruz, çünkü stil değişmeyecek.