const sliderElement = document.querySelector('#slider');
const buttonElement = document.querySelector('#button');

const sizePassword = document.querySelector('#valor');
const password = document.querySelector('#password');

const containerPassword = document.querySelector('#container-password');

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?/';
let newPassword = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
  sizePassword.innerHTML = this.value;
}

function generatePassword() {
  let pass = '';

  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n))
  }

  password.innerHTML = pass;
  containerPassword.classList.remove('hide');
  newPassword = pass;
}

function copyPassword() {
  alert('Senha copiada com sucesso!');
  navigator.clipboard.writeText(newPassword);
}