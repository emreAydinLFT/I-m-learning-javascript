document.getElementById("myButton").addEventListener("click", function () {
  let password = document.querySelector(".password1").value;
  let passwordError = document.getElementById("password1Error");
  let nameInput = document.querySelector(".nameInput").value; // nameInput tanımlandı

  // Parola uzunluğu kontrolü
  if (password.length < 8 || password.length > 16 || pasInput.trim() === "") {
    passwordError.textContent = "Lütfen adınızı girin.";
    passwordError.style.display = 'block';
    
    // input elementine 'error' class ekliyoruz, value'ya değil
    document.querySelector(".password").classList.add('error');
  }
});
