document.getElementById("myButton").addEventListener("click", function () {
  let password1 = document.querySelector(".password1").value;
  let password2 = document.querySelector(".password2").value;
  let email1 = document.querySelector(".email1").value;
  let email2 = document.querySelector(".email2").value;
  let messages = []; // hata mesajlarını toplamak için

  // Parola uzunluğu kontrolü
  if (password1.length < 8 || password1.length > 16) {
    messages.push("Parolanız 8 ile 16 karakter arasında olmalıdır.");
  }

  // Parola eşleşme kontrolü
  if (password1 !== password2) {
    messages.push("Parolalar eşleşmiyor.");
  }

  if (email1 || email2 ) {
    messages.push("Email adresleri eşleşmiyor.");
  }

  // Email eşleşme kontrolü
  if (email1 !== email2) {
    messages.push("Email adresleri eşleşmiyor.");
  }

  // Hataları ekrana yazdırma
  if (messages.length > 0) {
    alert(messages.join("\n")); // üm hata mesajlarını birleştirip alt alta gösteriyor.
  } else {
    alert("Kayıt başarılı!");
  }
});
