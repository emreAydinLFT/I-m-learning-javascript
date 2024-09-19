//! Asenkron Programlama ve Nesne Yönelimli Programlama (OOP)

//! Asenkron Programlama Nedir?
//? Asenkron programlama, bir programın bir işlemi tamamlanmasını beklemeden başka işlemlere devam etmesine olanak tanıyan bir programlama paradigmasıdır. Bu, özellikle I/O işlemleri (veri okuma, yazma gibi) gibi zaman alabilen işlemler için önemlidir. Asenkron programlama sayesinde programımız donmadan, kullanıcıya daha hızlı ve daha iyi bir deneyim sunabiliriz.

//! Nesne Yönelimli Programlama (OOP) Nedir?
//? OOP, gerçek dünyadaki nesneleri ve onların arasındaki ilişkileri modellemek için kullanılan bir programlama paradigmasıdır. Sınıflar, nesneler, kalıtım, kapsülleme gibi kavramlar OOP'nin temel taşlarıdır. OOP, büyük ve karmaşık yazılımları daha yönetilebilir hale getirerek yazılım geliştirme sürecini kolaylaştırır.

//! Asenkron Programlama ve OOP'nin Birlikte Çalışması
//? Asenkron programlama ve OOP, birbirini tamamlayan iki paradigmıdır. OOP ile oluşturulan nesneler, asenkron işlemleri gerçekleştirebilir. Bu sayede, nesnelerimiz daha bağımsız ve daha etkili bir şekilde çalışabilir.

//! Örnek Senaryo:

//? Bir web uygulamasında, bir kullanıcı bir dosya yüklediğinde, sunucu bu dosyayı diske yazma işlemini asenkron olarak gerçekleştirebilir. Bu sırada, kullanıcı arayüzü donmadan diğer işlemlere devam edebilir. Bu senaryoyu OOP ile şu şekilde modelleyebiliriz:

//* DosyaYükleme sınıfı: Dosya yükleme işlemini yöneten bir sınıftır.
//* Asenkron Metodu: yukle adında bir metot, dosya yükleme işlemini başlatır ve bir Promise döndürür. Bu Promise, işlemin tamamlandığında veya hata oluştuğunda sonuçlanır.
//* Callback veya Promise: İşlemin tamamlandığında veya hata oluştuğunda yapılacak işlemler, callback fonksiyonları veya Promise'ler aracılığıyla belirlenir.

class DosyaYukleme {
  yukle(dosya) {
    return new Promise((resolve, reject) => {
      // Asenkron dosya yazma işlemi
      setTimeout(() => {
        // Dosya başarıyla yazıldı
        resolve('Dosya başarıyla yüklendi.');
      }, 2000);
    });
  }
}

const yukleyici = new DosyaYukleme();
yukleyici.yukle('benimDosyam.txt')
  .then(sonuc => console.log(sonuc))
  .catch(hata => console.error(hata));

  