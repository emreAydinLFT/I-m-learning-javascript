//! Prototip Nedir?
//* Ortak Nesne: Prototip, bir nesnenin özellik ve metodlarının bir şablonunu içeren bir nesnedir.
//* Miras: Yeni bir nesne oluşturulduğunda, bu nesne otomatik olarak prototipinden özellik ve metodları miras alır.
//* Özelleştirme: Prototipteki özellik ve metotlar, yeni nesnelerde yeniden tanımlanarak özelleştirilebilir.

//! Prototip Zinciri
//? Bir nesnenin bir özelliği veya metodu çağrıldığında, JavaScript öncelikle o nesnede arar. Bulamaması durumunda prototip zincirini takip eder. Prototip zinciri, bir nesnenin prototipi, o prototipin prototipi ve böylece devam eden bir zincirdir. JavaScript, istenen özelliği veya metodu bulana kadar bu zinciri takip eder.