//? Destructuring => şeklini bozma
//? Spread => Dağılma, yayma

//! Destructuring

//? Destructuring, diziler veya nesnelerden değerleri alıp, onları daha küçük, bağımsız değişkenlere ayırmanızı sağlar. Bu, özellikle verilerle çalışırken kodu daha okunabilir hale getirir.

//! a) Array Destructuring (Dizi Yapı Bozma)

const dizi = [1, 2, 3, 4];

// Destructuring ile öğeleri ayırma
const [a, b, c] = dizi;

console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3


//! b) Object Destructuring (Nesne Yapı Bozma)
//? Nesnelerden anahtar değerlerini almak ve onları ayrı değişkenlerde saklamak için kullanılır.


const kisi = {
    isim: "Ahmet",
    yas: 25,
    sehir: "İzmir"
};

// Destructuring ile nesne öğelerini ayırma
const { isim, yas, sehir } = kisi;

console.log(isim);  // "Ahmet"
console.log(yas);   // 25
console.log(sehir); // "İzmir"

//! c) Varsayılan Değerler ile Destructuring
//? Eğer bir nesne veya dizide belirli bir anahtar veya indeks bulunmuyorsa, varsayılan bir değer atayabilirsiniz.

const kisi2 = {
    isim: "Ahmet",
    yas: 25
};

// Varsayılan değerler ile destructuring
const { isim2, sehir2 = "Bilinmiyor" } = kisi2;

console.log(isim2);  // "Ahmet"
console.log(sehir2); // "Bilinmiyor" (çünkü `sehir` özelliği yok)


//! Spread (Yayma) Operatörü

//! a) Array Spread (Dizi Yayma)
//? Bir dizinin elemanlarını başka bir diziye yaymak için kullanılır.

