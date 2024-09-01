//! SET

// Yeni bir Set oluşturma
const set = new Set();

// Set'e eleman ekleme
set.add(1);
set.add(2);
set.add(3);
set.add(1);  // Tekrar eklenmez, çünkü 1 zaten mevcut

console.log(set);  // Set {1, 2, 3}

// Set'ten eleman çıkarma
set.delete(2);
console.log(set);  // Set {1, 3}

// Set'teki eleman sayısını öğrenme
console.log(set.size);  // 2

// Set içinde bir elemanın olup olmadığını kontrol etme
console.log(set.has(1));  // true
console.log(set.has(4));  // false

// Set üzerinde döngü
for (let item of set) {
  console.log(item);
}
// Çıktı: 
// 1
// 3

//? Benzersiz Değerler: Set, bir veri kümesindeki benzersiz elemanları saklamak istediğinizde idealdir. Örneğin, bir listede yinelenen elemanları filtrelemek için kullanılabilir.
//? Matematiksel Küme Operasyonları: Kesişim, fark, birleşim gibi küme işlemleri yapmak için kullanılabilir.



//! MAP

// Yeni bir Map oluşturma
const map = new Map();

// Map'e anahtar-değer çifti ekleme
map.set('ad', 'Ali');
map.set('yas', 30);
map.set('sehir', 'İstanbul');

console.log(map);  // Map {"ad" => "Ali", "yas" => 30, "sehir" => "İstanbul"}

// Map'ten bir anahtarın değerini alma
console.log(map.get('ad'));  // "Ali"
console.log(map.get('yas'));  // 30

// Map'teki anahtar-değer çiftlerini kaldırma
map.delete('sehir');
console.log(map);  // Map {"ad" => "Ali", "yas" => 30}

// Map'teki anahtar sayısını öğrenme
console.log(map.size);  // 2

// Map'te bir anahtarın olup olmadığını kontrol etme
console.log(map.has('ad'));  // true
console.log(map.has('sehir'));  // false

// Map üzerinde döngü
for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// Çıktı:
// ad: Ali
// yas: 30

//? Anahtar-Değer Depolama: Map, bir veri kümesinde anahtarlar ve onlara karşılık gelen değerleri saklamak için idealdir. Örneğin, kullanıcı bilgilerini (kullanıcı adı ve yaşı) saklamak için kullanılabilir.
/Nesnelere Alternatif: Map, özellikle anahtarların veri tipi olarak object (nesne) veya function (fonksiyon) gibi kompleks türlerde olabileceği durumlarda, nesnelere göre daha esnek ve güçlüdür.