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

const dizi1 = [1, 2, 3];
const dizi2 = [4, 5, 6];

const birlesikDizi = [...dizi1, ...dizi2];

console.log(birlesikDizi);  // [1, 2, 3, 4, 5, 6]

//! b) Object Spread (Nesne Yayma)
//? Bir nesnenin özelliklerini başka bir nesneye yaymak için kullanılır.

const kisi = { isim: "Ahmet", yas: 25 };
const adres = { sehir: "İzmir", ulke: "Türkiye" };

const profil = { ...kisi, ...adres };

console.log(profil);
// { isim: "Ahmet", yas: 25, sehir: "İzmir", ulke: "Türkiye" }

//! c) Kopyalama ve Birleştirme

//Spread operatörü, dizileri ve nesneleri kopyalamak veya birleştirmek için de kullanılır.
