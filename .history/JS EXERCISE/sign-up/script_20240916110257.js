document.getElementById("myButton").addEventListener("click", function () {
  let password = document.querySelector(".password").value; // Sınıf ismi doğru
  let passwordError = document.getElementById("passwordError"); // Doğru id
  let passwordInput = document.querySelector(".password"); // input elemanı

  // Parola uzunluğu kontrolü
  if (password.length < 8 || password.length > 16 || password.trim() === "") {
    passwordError.textContent = "Parola 8-16 karakter arasında olmalı ve boş olmamalıdır.";
    passwordError.style.display = 'block';
    
    // input elementine 'error' class ekliyoruz
    passwordInput.classList.add('error');
  } else {
    passwordError.style.display = 'none';
    passwordInput.classList.remove('error');
    alert("Kayıt başarılı!");
  }
});
