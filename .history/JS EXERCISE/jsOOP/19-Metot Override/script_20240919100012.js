//! Metot Geçersiz Kılma (Override)

//? Metot geçersiz kılma veya override, bir nesne yönelimli programlama kavramıdır ve bir sınıfın, miras aldığı bir metodu kendi içinde yeniden tanımlamasına olanak tanır. Bu sayede, temel sınıfta tanımlanan bir davranış, alt sınıflarda farklı şekillerde uygulanabilir.

///Neden Metot Geçersiz Kılma Yapılır?

Polimorfizm: Farklı türdeki nesnelerin aynı mesajı (metodu) farklı şekillerde yanıtlamasına olanak tanır.
Özellik Özelleştirme: Alt sınıflar, miras aldıkları metodu kendi ihtiyaçlarına göre özelleştirebilir.
Kod Tekrarını Azaltma: Ortak davranışlar temel sınıfta tanımlanır ve alt sınıflarda sadece farklı kısımlar yeniden yazılır.