document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle
  
    var email1 = document.getElementById("email1");
    var email2 = document.getElementById("email2");
    var parola1 = document.getElementById("parola1");
    var parola2 = document.getElementById("parola2");
    var errorMessage = document.getElementById("errorMessage");
  
    var validEmailEnding = "@gmail.com";
    var isValid = true;
  
    // Önce tüm inputları varsayılan hale getir (örneğin kırmızı kenarlığı kaldır)
    email1.classList.remove("error");
    email2.classList.remove("error");
    parola1.classList.remove("error");
    parola2.classList.remove("error");
  
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
  
    // Form geçerli değilse hata mesajı göster ve işlemi durdur
    if (!isValid) {
      return false;
    }
  
    alert("Form başarıyla doğrulandı!");
  });
  