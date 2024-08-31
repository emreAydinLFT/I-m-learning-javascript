//? -------------------------------- DOM MANİPÜLASYONU -------------------------------

//! map() Yöntemi

const numbers = [1, 2, 3, 4, 5];
const myNumbers = numbers.map(num => num * num);

console.log(myNumbers);     //todo-- her bir dizi elemanı üzerinde belirtilen işlemi yapar ve yeni bir dizi döner.

//! filter() Yöntemi

// const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);    //todo -- belirtilen koşulu sağlayan elemanlardan oluşan yeni bir dizi döner.

//! reduce() Yöntemi

// const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc,num) => acc + num, 0);
console.log(sum); //todo  Dizeyi tek bir değere indirger. Mesela tüm elemanların toplamını hesaplamak.


//! forEach() Yöntemi 

// const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * 2));
//todo Dizi elemanları üzerinde döngü yapar ve her bir eleman için belirtilen işlemi gerçekleştirir. Geriye bir değer döndürmez.

//! slice() Yöntemi

// const numbers = [1, 2, 3, 4, 5];
const sliceNumbers = numbers.slice(1,4);
console.log(sliceNumbers);
//todo  Belirli bir aralıktaki elemanları içeren yeni bir dizi döner. Orijinal dizi değişmez.


//! splice() Yöntemi

numbers.splice(2, 1, 99); //todo 2. index elemanından itibaren 1 eleman sil ve yerine 99 ekle.
console.log(numbers);

//! find() ve findIndex() Yöntemleri
const found = numbers.find(num => num > 10);
console.log(found); //todo find() ilk eşleşen elemanı döner.

const index = numbers.findIndex(num => num > 10);
console.log(index);  //todo findIndex() bu elemanın dizinini döner. Yani index numarasını.


//! concat() yöntemi iki veya daha fazla diziyi birleştirir ve yeni bir dizi döner.
//! reverse() diziyi tersine çevirir ve orijinal diziyi değiştirir.
//! sort() diziyi sıralar ve orijinal diziyi değiştirir. Varsayılan olarak, elemanları string olarak sıralar.





//?  Kendi yaptığım örnekler

//? map(), 
//todo her bir dizi elemanı üzerinde belirtilen işlemi yapar ve yeni bir dizi döner.
//? filter(),
//todo belirtilen koşulu sağlayan elemanlardan oluşan yeni bir dizi döner.
//? reduce(azaltmak),
//todo Dizeyi tek bir değere indirger. Mesela tüm elemanların toplamını hesaplamak.
//? forEach(),
//todo Dizi elemanları üzerinde döngü yapar ve her bir eleman için belirtilen işlemi gerçekleştirir. Geriye bir değer döndürmez.
//? concat(birleştirme),
//todo yöntemi iki veya daha fazla diziyi birleştirir ve yeni bir dizi döner.
//? slice(dilim),
//todo Belirli bir aralıktaki elemanları içeren yeni bir dizi döner. Orijinal dizi değişmez.
//? splice(ekleme),
//todo 2. index elemanından itibaren 1 eleman sil ve yerine 99 ekle.
//? find(),
//todo  ilk eşleşen elemanı döner.
//? findIndex(),
//todo bu elemanın dizinini döner. Yani index numarasını.
//? reverse(ters),
//todo diziyi tersine çevirir ve orijinal diziyi değiştirir.
//? sort(sıralama),
//todo diziyi sıralar ve orijinal diziyi değiştirir. Varsayılan olarak, elemanları string olarak sıralar.


const scores = [55, 53, 62, 86, 43, 94, 61];
const newScores = scores.map(score => {
    if(score >= 90) {
        return 'A';
    }else if(score >= 80) {
        return 'B';
    }else if(score >= 70){
        return 'C';
    }else {
        return 'F';
    }
})
console.log(newScores);



function addVAT(price) {
    const vatRate = 0.18;
    return price + price * vatRate
}

const prices = [100, 150, 200, 250, 300];
const pricesWithVAT = prices.map(addVAT);

console.log(pricesWithVAT);


//? Öğrencilerin ortalamasının alınması (kafamdan uydurdum)


function calculateAverage(scores) {
    return (scores.score1 + scores.score2 + scores.score3) / 3;
    }


const scoresOfStudents = [
    {name: 'Emre', score1: 50, score2: 60, score3: 70},
    {name: 'Semih', score1: 60, score2: 70, score3: 80},
    {name: 'Numune', score1: 70, score2: 80, score3: 90}
];

const averageScores = scoresOfStudents.map(student => {
    return {  
    name: student.name,
    average: calculateAverage(student)
        };
    });
    console.log(averageScores);
    
    
    
//!  mesai hesaplama

const maas = 22500;

function mesai(employee) {
    const mesaiKatsayi = 1.5 ;
    const saatlikUcret = maas / 225 ;
    const mesaiUcreti = mesaiKatsayi * saatlikUcret ;
    return (mesaiUcreti * employee.mesaiEylul + maas);
};

const mesailer = [
    { name: 'Emre', mesaiEylul: 115},
    { name: 'Numune', mesaiEylul: 216}
];

const mesaiUcreleri =  mesailer.map(employee => {
    return {
    name: employee.name,
    totalSalary: mesai(employee)
    };
});

console.log(mesaiUcreleri);


//!   salary : maaş, employee: çalışan 

//! -------------------------------------------------

//! Dizideki en büyük sayıyı bulma.

function findMax(arr) {
    return Math.max(...arr);
}

let numbers1 = [5, 3, 9, 1, 7];
console.log(findMax(numbers1)); // Çıktı: 9

//! Dizideki Her Elemanı İkiye Katla

function doubleArray(arr) {
   re
}

let numbers = [2, 4, 6];
console.log(doubleArray(numbers)); // Çıktı: [4, 8, 12]
