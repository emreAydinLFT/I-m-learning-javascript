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



