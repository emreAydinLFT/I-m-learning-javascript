(() => {
    // Saat ve tarih göstereceğimiz HTML elementlerini seçiyoruz
    const clockElement = document.querySelector('.clock');
    const dateElement = document.querySelector('.date');
    const toggleButton = document.querySelector('.toggle-btn');
  
    // Başlangıçta saat formatı 24 saat olacak şekilde ayarlıyoruz
    let is24HourFormat = true;
  
    // Saat ve tarihi güncelleyen fonksiyon
    function updateClockAndDate() {
      // Şu anki tarih ve saati alıyoruz
      const now = new Date();
  
      // Saat, dakika ve saniyeyi alıyoruz
      let hours = now.getHours(); // Saat bilgisini alıyoruz
      const minutes = String(now.getMinutes()).padStart(2, '0'); // Dakikayı 2 haneli olarak alıyoruz
      const seconds = String(now.getSeconds()).padStart(2, '0'); // Saniyeyi 2 haneli olarak alıyoruz
      
      // Eğer 12 saat formatı seçilmişse, saati 12 saat formatına çeviriyoruz
      let period = ''; // AM/PM göstermek için
      if (!is24HourFormat) {
        period = hours >= 12 ? 'PM' : 'AM'; // Saat 12'den büyükse PM, değilse AM yazıyoruz
        hours = hours % 12 || 12; // 12 saat formatı için saat hesaplaması yapıyoruz
      }
  
      // Şu anki zamanı, gerekli formatta ekrana yazdırıyoruz
      const formattedTime = `${hours}:${minutes}:${seconds} ${period}`;
      clockElement.textContent = formattedTime.trim(); // Saat bilgisini clock elementine yazıyoruz
  
      // Tarihi, yerel formatta alıp ekrana yazdırıyoruz
      const formattedDate = now.toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      dateElement.textContent = formattedDate; // Tarih bilgisini date elementine yazıyoruz
    }
  
    // Kullanıcı 12 saat/24 saat formatı arasında geçiş yaparken butona tıklayacak
    toggleButton.addEventListener('click', () => {
      is24HourFormat = !is24HourFormat; // Saat formatını tersine çeviriyoruz
      toggleButton.textContent = is24HourFormat
        ? '12 saat formatına geç' // Eğer 24 saat formatındaysak butonda 12 saat formatına geç yazacak
        : '24 saat formatına geç'; // Eğer 12 saat formatındaysak butonda 24 saat formatına geç yazacak
    });
  
    // Saati her saniye güncellemek için setInterval kullanıyoruz
    setInterval(updateClockAndDate, 1000); // Her 1000 milisaniyede bir (1 saniyede) güncelle
  
    // Sayfa yüklendiğinde ilk başta saati ve tarihi göstermek için fonksiyonu hemen çağırıyoruz
    updateClockAndDate();
  })();
  