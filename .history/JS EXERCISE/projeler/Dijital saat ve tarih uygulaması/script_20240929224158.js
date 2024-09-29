(() => { // IIFE (Immediately Invoked Function Expression) yani tanımlandığı anda çalışacak bir fonksiyon oluşturuyoruz.
  
    // Saat ve tarih göstereceğimiz HTML elementlerini seçiyoruz
    const clockElement = document.querySelector('.clock'); // 'clock' sınıfına sahip elementi seçiyoruz, saat bilgisini burada göstereceğiz.
    const dateElement = document.querySelector('.date'); // 'date' sınıfına sahip elementi seçiyoruz, tarih bilgisini burada göstereceğiz.
    const toggleButton = document.querySelector('.toggle-btn'); // 'toggle-btn' sınıfına sahip butonu seçiyoruz, kullanıcı bu butona tıklayarak saat formatını değiştirecek.
  
    // Başlangıçta saat formatı 24 saat olacak şekilde ayarlıyoruz
    let is24HourFormat = true; // Varsayılan olarak 24 saat formatını kullanacağımızı belirliyoruz.
  
    // Saat ve tarihi güncelleyen fonksiyon
    function updateClockAndDate() {
      // Şu anki tarih ve saati alıyoruz
      const now = new Date(); // JavaScript'in Date nesnesini kullanarak mevcut tarih ve saat bilgilerini alıyoruz.
  
      // Saat, dakika ve saniyeyi alıyoruz
      let hours = now.getHours(); // Şu anki saat bilgisini alıyoruz (0-23 arası, 24 saat formatında).
      const minutes = String(now.getMinutes()).padStart(2, '0'); // Dakika bilgisini 2 haneli olarak alıyoruz (örneğin, 01, 09 gibi).
      const seconds = String(now.getSeconds()).padStart(2, '0'); // Saniye bilgisini de 2 haneli olarak alıyoruz.
  
      // Eğer 12 saat formatı seçilmişse, saati 12 saat formatına çeviriyoruz
      let period = ''; // AM/PM göstermek için boş bir değişken oluşturuyoruz.
      if (!is24HourFormat) { // Eğer 12 saat formatı seçilmişse (24 saat formatında değilsek)
        period = hours >= 12 ? 'PM' : 'AM'; // Saat 12'den büyük veya eşitse 'PM', değilse 'AM' yazacak.
        hours = hours % 12 || 12; // Saat 12'den büyükse 12 saat formatına çeviriyoruz. 12'ye bölümünden kalan saati alıyoruz. Eğer saat 0 ise 12 gösteriyoruz.
      }
  
      // Şu anki zamanı, gerekli formatta ekrana yazdırıyoruz
      const formattedTime = `${hours}:${minutes}:${seconds} ${period}`; // Saat, dakika, saniye ve (varsa) AM/PM bilgilerini birleştiriyoruz.
      clockElement.textContent = formattedTime.trim(); // Bu bilgiyi 'clock' elementine yazdırıyoruz, trim() ile gereksiz boşlukları siliyoruz.
  
      // Tarihi, yerel formatta alıp ekrana yazdırıyoruz
      const formattedDate = now.toLocaleDateString('tr-TR', { // Şu anki tarihi 'tr-TR' (Türkçe) formatında alıyoruz.
        year: 'numeric', // Yıl bilgisini numerik olarak gösteriyoruz (örneğin: 2024).
        month: 'long',   // Ay bilgisini uzun formatta gösteriyoruz (örneğin: Eylül).
        day: 'numeric'   // Gün bilgisini numerik olarak gösteriyoruz (örneğin: 29).
      });
      dateElement.textContent = formattedDate; // Formatlanmış tarih bilgisini 'date' elementine yazdırıyoruz.
    }
  
    // Kullanıcı 12 saat/24 saat formatı arasında geçiş yaparken butona tıklayacak
    toggleButton.addEventListener('click', () => { // Kullanıcı butona tıkladığında bu olay tetiklenecek.
      is24HourFormat = !is24HourFormat; // Saat formatını tersine çeviriyoruz. (true ise false yapıyoruz, false ise true yapıyoruz).
      toggleButton.textContent = is24HourFormat // Butonun üzerindeki metni değiştiriyoruz.
        ? '12 saat formatına geç' // Eğer şu an 24 saat formatındaysak, butona "12 saat formatına geç" yazısı ekliyoruz.
        : '24 saat formatına geç'; // Eğer 12 saat formatındaysak, butona "24 saat formatına geç" yazısı ekliyoruz.
    });
  
    // Saati her saniye güncellemek için setInterval kullanıyoruz
    setInterval(updateClockAndDate, 1000); // Her 1000 milisaniyede (1 saniyede) bir 'updateClockAndDate' fonksiyonunu çalıştırarak saati güncelliyoruz.
  
    // Sayfa yüklendiğinde ilk başta saati ve tarihi göstermek için fonksiyonu hemen çağırıyoruz
    updateClockAndDate(); // Sayfa ilk yüklendiğinde saat ve tarihi hemen göstermek için fonksiyonu çağırıyoruz, böylece 1 saniye beklemiyoruz.
  })();
  