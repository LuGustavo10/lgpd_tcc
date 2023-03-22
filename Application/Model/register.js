function togglePassword(inputId, eyeIcon) {
  const input = document.getElementById(inputId);
  const isPassword = input.getAttribute('type') === 'password';

  input.setAttribute('type', isPassword ? 'text' : 'password');
  eyeIcon.classList.toggle('bi-eye-slash');
  eyeIcon.classList.toggle('bi-eye');
}

function validarForm() {
  // Obtém os valores dos campos
  let nome = document.getElementById("name").value;
  let sobrenome = document.getElementById("last_name").value;
  let senha = document.getElementById("pass").value;
  let confirmarSenha = document.getElementById("c_pass").value;
  
  // Verifica se há números no nome ou sobrenome
  let regexNome = /\d/;
  if (regexNome.test(nome) || regexNome.test(sobrenome)) {
  alert("Nome e sobrenome não podem conter números.");
  return false;
  }
  
  // Verifica se a senha tem pelo menos um número, um caractere especial e uma letra maiúscula
  let regexSenha = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  console.log(regexSenha)
  if (!regexSenha.test(senha)) {
  alert("A senha deve conter pelo menos um número, um caractere especial e uma letra maiúscula.");
  return false;
  }
  
  
  // Verifica se a senha e a confirmação de senha são iguais
  if (senha !== confirmarSenha) {
  alert("A confirmação de senha não é igual à senha.");
  return false;
  }
  
  // Se todas as validações passaram, pode enviar o formulário
  alert("Conta criada com sucesso!");
  return true;
  }
