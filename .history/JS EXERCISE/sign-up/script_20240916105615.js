document.getElementById("myButton").addEventListener("click", function () {
  let password1 = document.querySelector(".password1").value;
  let password2 = document.querySelector(".password2").value;
  let email1 = document.querySelector(".email1").value;
  let email2 = document.querySelector(".email2").value;
  let password1Error = document.getElementById("password1Error");
  let nameInput = document.querySelector(".nameInput").value; // nameInput tanımlandı

  // Parola uzunluğu kontrolü
  if (password1.length < 8 || password1.length > 16 || nameInput.trim() === "") {
    password1Error.textContent = "Lütfen adınızı girin.";
    password1Error.style.display = 'block';
    
    // input elementine 'error' class ekliyoruz, value'ya değil
    document.querySelector(".password1").classList.add('error');
  }
});
