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

//? fonksiyon ve for ile diziyi t