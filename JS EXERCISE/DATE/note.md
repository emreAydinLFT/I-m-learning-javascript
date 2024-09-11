```javascript

// mevcut tarihi yazdırma

let now = new Date(); 
console.log(now); 
 
// Yıl, Ay, Gün yazdırma 

let now = new Date();
let year = now.getFullYear(); // Yılı alır.
let month = now.getMonth() + 1; // Ayı alır (0-11 arası, bu yüzden +1 eklenir)
let day = now.getDate() // günü alır

console.log(`Tarih: ${day}/${month}/${year}`);


// Saat dakika ve saniye almak

let now = new Date();

let hours = now.getHours();  // Saat Alır (0-23 arası)
let minutes = now.getMinutes(); // Dakika alır (0-59 arası)
let seconds = now.getSeconds(); // Saniye alır (0-59 arası)
console.log(`Saat: ${hours}:${minutes}:${seconds}`);


// Tarihi Özelleştirilmiş Formatta yazdırma

let now = new Date();
let formattedDate = now.toLocaleDateString("tr-TR),{
    year: "numeric", // numeric=sayı
    month: "long",
    day: "numeric",
}
console.log(formattedDate);

// Örnek 
const date = new Date();
const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formatter = new Intl.DateTimeFormat('tr-TR', options); // 'tr-TR' Türkiye için yerel format
console.log(formatter.format(date));
// Örnek çıktı: '04.09.2024, 14:30:45'

// toLocaleDateString() ve toLocaleTimeString() Kullanımı: Bu yöntemler tarih ve zaman formatlarını yerel ayarlarınıza göre özelleştirmenize olanak tanır.

// Yerel tarih formatı
let dateString = now.toLocaleDateString('tr-TR'); // '04.09.2024'

// Yerel zaman formatı
let timeString = now.toLocaleTimeString('tr-TR'); // '14:30:45'

// Özelleştirilmiş format
let customDateString = now.toLocaleDateString('tr-TR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
}); // '04.09.2024'

let customTimeString = now.toLocaleTimeString('tr-TR', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
}); // '14:30:45'



// daha kolayı var

let formattedDate = `${year}-${month2Digit}-${day2Digit}`; // '2024-09-04'
let formattedTime = `${hours2Digit}:${minutes2Digit}:${seconds2Digit}`; // '14:30:45'
// kısaltmaların anlamları

{ year: "numeric", month: "long", day: "numeric" } parametresi, tarihi şu şekilde biçimlendirmeyi belirtir:
year: "numeric" — Yılın tamamı (örn. 2024).
month: "long" — Ay adı uzun formatta (örn. Eylül).
day: "numeric" — Gün numarası (örn. 4).



// padStart a verdiğimiz ilk değer kapsamı belirliyor.2 verirsek max 2 karakter oluyor mesela, ikince parametre ne ile başına eklenecek karakteri belirliyoruz.Ve bu bir şey yazmaksak boşluk karakteridir.

//Standart tarihten çıkıp mesela ay'ın 2 karakterli olmasını istiyorsak değişkeni String ifade yapmamız ve sonrasında padStart vermemiz gerekiyor.

// sayfa her yenilendiğinde tarihi güncellemek için updateDateTime(); metodunu kullanıyoruz
// her saniye tarihi güncellemek için setInterval(updateDateTime,1000); metodunu kullanıyoruz.







```