document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle
  
    var email1 = document.getElementById("email1");
    var email2 = document.getElementById("email2");
    var parola1 = document.getElementById("parola1");
    var parola2 = document.getElementById("parola2");
    var phone = document.getElementById("phone");
    var errorMessage = document.getElementById("errorMessage");
  
    var validEmailEnding = "@gmail.com";
    var isValid = true;
  
    // Önce tüm inputları varsayılan hale getir (örneğin kırmızı kenarlığı kaldır)
    email1.classList.remove("error");
    email2.classList.remove("error");
    parola1.classList.remove("error");
    parola2.classList.remove("error");
    phone.classList.remove("error");
  
    errorMessage.textContent = ""; // Hata mesajını temizle
  
    // E-posta kontrolü
    if (!email1.value.endsWith(validEmailEnding) || !email2.value.endsWith(validEmailEnding)) {
      errorMessage.textContent = "E-posta adresiniz '@gmail.com' ile bitmeli.";
      email1.classList.add("error");
      email2.classList.add("error");
      isValid = false;
    } else if (email1.value !== email2.value) {
      errorMessage.textContent = "E-posta adresleri eşleşmiyor.";
      email1.classList.add("error");
      email2.classList.add("error");
      isValid = false;
    }
  
    // Parola kontrolü
    if (parola1.value.length > 16) {
      errorMessage.textContent = "Parola en fazla 16 karakter olmalı.";
      parola1.classList.add("error");
      parola2.classList.add("error");
      isValid = false;
    } else if (parola1.value !== parola2.value) {
      errorMessage.textContent = "Parolalar eşleşmiyor.";
      parola1.classList.add("error");
      parola2.classList.add("error");
      isValid = false;
    }
  
    // Telefon numarası kontrolü
    var phonePattern = /^[5]{1}[0-9]{2}-[0-9]{3}-[0-9]{4}$/;
    if (!phonePattern.test(phone.value)) {
      errorMessage.textContent = "Telefon formatı '5XX-XXX-XXXX' şeklinde olmalı.";
      phone.classList.add("error");
      isValid = false;
    }
  
    // Form geçerli değilse hata mesajı göster ve işlemi durdur
    if (!isValid) {
      return false;
    }
  
    // Eğer tüm doğrulamalar başarılıysa
    errorMessage.textContent = ""; // Hata mesajını temizle
    alert("Form başarıyla doğrulandı!");
  });
  