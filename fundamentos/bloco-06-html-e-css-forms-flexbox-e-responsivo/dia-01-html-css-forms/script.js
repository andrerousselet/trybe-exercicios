const submitButton = document.getElementById('btn-submit');
const clearButton = document.getElementById('btn-clear');
const auth = document.getElementById('auth');

function textInputValidation() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;
  const name = document.querySelector('#username').value.length;
  const invalidName = name < 10 || name > 40;
  const reason = document.querySelector('#porque').value.length;
  const invalidReason = reason > 500;
  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}

function submit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

function clear() {
  const inputs = document.querySelectorAll('input');
  let textArea = document.querySelector('textarea');
  for (let index = 0; index < inputs.length; index += 1) {
    let userInput = inputs[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}

function enableSubmit() {
  submitButton.disabled = !auth.checked;
}

window.onload = function () {
  submitButton.addEventListener('click', submit);
  clearButton.addEventListener('click', clear);
  auth.addEventListener('change', enableSubmit);
}
