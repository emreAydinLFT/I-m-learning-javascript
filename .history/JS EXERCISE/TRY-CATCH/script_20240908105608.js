/*
function divide(a, b) {
    try{
        if(b === 0){
            throw new Error('bölme hatası : bölmenin sıfır olması mümkün değil.');
        }
        return a / b ;
    }catch(error){
        console.error(error.message);
        return null;
    }
}
console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Hata mesajı ve null döner
*/
/*
function readFile(filePath){
    // dosya okuma işlemleri
    try {
        console.log('dosya başarıyla okundu', filePath);
    }catch(error){
        console.error('dosya okuma hatası', eroor);
    }finally {
        console.log('dosya okuma işlemi tatmalandı');
    }
}

readFile('path/to/file.text');
*/

async function fetchData() {     // async olması asenkron olduğu ve promise döneceği anlamına gelir.ve await kullanabilmemizi sağlar.
  try {        // try bloğu hataların yaka
    let response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Ağ hatası");
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Veri alırken hata oluştu:", error);
  }
}

fetchData();
