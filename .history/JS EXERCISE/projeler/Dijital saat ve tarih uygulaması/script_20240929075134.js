(() => {
    const clockElement = document.querySelector('.clock');
    const dateElement = document.querySelector('.date');
    const toggleButton = document.querySelector('.toggle-btn');
  
    let is24HourFormat = true; // Varsayılan olarak 24 saat formatı
  
    // Saat ve tarihi güncelleyen fonksiyon
    function updateClockAndDate() {
      const now = new Date();
  
      // Saat, dakika ve saniyeyi al
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      
      // 12 saat veya 24 saat formatı
      let period = '';
      if (!is24HourFormat) {
        period = hours >= 12 ? 'PM' : 'AM'; // 12 saat formatı için
        hours = hours % 12 || 12; // 12 saat formatına dönüştür
      }
  
      // Saati göster
      const formattedTime = `${hours}:${minutes}:${seconds} ${period}`;
      clockElement.textContent = formattedTime.trim();
  
      // Tarihi göster
      const formattedDate = now.toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      dateElement.textContent = formattedDate;
    }
  
    // 12 saatlik ve 24 saatlik format arasında geçiş
    toggleButton.addEventListener('click', () => {
      is24HourFormat = !is24HourFormat;
      toggleButton.textContent = is24HourFormat
        ? '12 saat formatına geç'
        : '24 saat formatına geç';
    });
  
    // Saati her saniye güncelle
    setInterval(updateClockAndDate, 1000);
  
    // Başlangıçta saati ve tarihi güncelle
    updateClockAndDate();
  })();
  