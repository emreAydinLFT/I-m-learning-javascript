//! JavaScript'te this Anahtar Kelimesi

//? this anahtar kelimesi, JavaScript'te bir fonksiyonun çağrıldığı bağlamı ifade eder. Başka bir deyişle, this anahtar kelimesi, o anda hangi nesne üzerinden çalışıldığını belirtir. Ancak, this anahtar kelimesinin değeri, fonksiyonun çağrıldığı yere göre değişebilir. Bu da JavaScript'te sık karşılaşılan bir karmaşıklık kaynağıdır.

//! Fonksiyonun Çalışma Ortamı:
//* Global Çalışma Ortamı: Eğer bir fonksiyon global olarak çağrılırsa, this genellikle window nesnesini (tarayıcıda) veya global nesnesini (Node.js'te) ifade eder.
//* Nesne İçindeki Fonksiyonlar: Bir nesne içinde tanımlanan bir fonksiyonda this, o nesneyi ifade eder.
//* Event Handlerlar: Event handlerlar gibi özel durumlarda, this farklı nesneleri ifade edebilir.
//* call(), apply() ve bind() Metotları: Bu metotlar, this anahtar kelimesinin değerini zorla değiştirebilir.


//! this Anahtar Kelimesinin Kullanım Alanları
//* Nesnelerin Özelliklerine Erişim: Bir nesne içindeki bir fonksiyondan o nesnenin özelliklerine erişmek için this kullanılır.
Constructor Fonksiyonları: Constructor fonksiyonlarında, this yeni oluşturulan nesneyi ifade eder.
Event Handlerlar: Event handlerlarda, this genellikle event'in tetiklendiği elemanı ifade eder.