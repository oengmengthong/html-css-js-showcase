const form = document.getElementById('signup-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

function validatePasswordMatch() {
  if (confirmPassword.value && confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity('Passwords must match');
  } else {
    confirmPassword.setCustomValidity('');
  }
}

password.addEventListener('input', validatePasswordMatch);
confirmPassword.addEventListener('input', validatePasswordMatch);

form.addEventListener('submit', (e) => {
  validatePasswordMatch();
  if (!form.checkValidity()) {
    e.preventDefault();
    form.reportValidity();
  }
});
