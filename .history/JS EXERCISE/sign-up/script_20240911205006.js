document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dob = document.getElementById('dob').value;
    const terms = document.getElementById('terms').checked;

    let isValid = true;

    // Username validation
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Kullanıcı adı en az 3 karakter olmalı.';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Geçerli bir e-posta adresi girin.';
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Şifre en az 6 karakter olmalı.';
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Şifreler eşleşmiyor.';
        isValid = false;
    }

    // Date of birth validation
    const today = new Date();
    const dobDate = new Date(dob);
    if (dobDate >= today) {
        document.getElementById('dobError').textContent = 'Doğum tarihi bugünden önce olmalı.';
        isValid = false;
    }

    // Terms validation
    if (!terms) {
        document.getElementById('termsError').textContent = 'Kullanım şartlarını kabul etmelisiniz.';
        isValid = false;
    }

    if (isValid) {
        alert('Kayıt başarılı!');
        // Form submission logic can go here
    }
});
