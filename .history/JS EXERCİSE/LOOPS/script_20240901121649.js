for (let i = 0; i <= 5; i++) {
  console.log(i);
} //! 0 dan 5 e kadar sayıları yazdırır

for (let i = 1; i <= 5; i++) {
  console.log(`${i}*${i} = ${i * i}`);
} //!  1*1=1 2*2=2 3*3=9 gibi.





let rows = 10; //! Üçgenin yüksekliği

for (let i = 1; i <= rows; i++) {
  let line = ""; //! Her satır için yıldızları saklamak üzere bir değişken

  //! Her satırda i kadar yıldız ekleyin
  for (let j = 1; j <= i; j++) {
    line += "*";
  }

  console.log(line); //! Satırı ekrana yazdırın
}



//! for() döngüsü

for (let i = 1; i <= 100; i++){
  console.log(i);
}

for (let i=1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log (i);
  }
}

//? fonksiyon ve for döngüsü ile dizi elemanlarını toplama


function diziToplami(dizi) {
  let toplam = 0;

  for (let i = 0; i < dizi.length; i++) {
    toplam += dizi[i];
  }

  return toplam;
}

// Örnek kullanım:
const sayilar = [2, 4, 6, 8, 10];
const sonuc = diziToplami(sayilar);
console.log("Toplam:", sonuc); // Çıktı: Toplam: 30


//! Bir sayı dizisi içerisindeki çift sayıları yeni bir diziye aktarma

const sayilar2 = [];

for (let i = 0; i <= 10; i++){
  sayilar2.push(i);
}
const ciftSayilar = [];
for (let sayi of sayilar2) {
  if (sayi % 2 === 0) {
    ciftSayilar.push(sayi);
  }
}
console.log("2'ye bölünen sayılar:", ciftSayilar);


const sayilar4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ciftSayilar2 = [];

for (let i = 0; i < sayilar4.length; i++) {
  if (sayilar[i] % 2 === 0) {
    ciftSayilar2.push(sayilar[i]);
  }
}

console.log(ciftSayilar2);


const sayilar6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ciftSayilar3 = sayilar6.filter(sayi => sayi % 2 === 0);

console.log(ciftSayilar3);


//! Dizi üzerindeki işlemler

//? Dizi elemanlarını tek tek yazdırma

//! for() döngüsü ile yazımı

let dizi = ['Emre','örnek', 'örnek2'];
for (let i = 0; i < dizi.length; i++) {
  console.log(dizi[i]);
}

//! foreach() metodu ile yazdırma

const meyveler2 = ["elma", "armut", "muz", "çilek"];

meyveler2.forEach(meyve => {
  console.log(meyve);
});

//! for...of metodu ile yazdırma

const meyveler = ["elma", "armut", "muz", "çilek"];

for (let meyve of meyveler) {
  console.log(meyve);
}



//! Dizideki en büyük sayıyı bulma

const sayilar7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let enBuyukSayi = sayilar7[0];  // İlk sayıyı en büyük kabul ederek başlıyoruz.

for (let )


