function togglePassword(inputId, eyeIcon) {
  const input = document.getElementById(inputId);
  const isPassword = input.getAttribute('type') === 'password';

  input.setAttribute('type', isPassword ? 'text' : 'password');
  eyeIcon.classList.toggle('bi-eye-slash');
  eyeIcon.classList.toggle('bi-eye');
}
