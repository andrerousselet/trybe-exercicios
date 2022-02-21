const submitButton = document.getElementById('btn-submit');
const clearButton = document.getElementById('btn-clear');
const auth = document.getElementById('auth');

function submit(event) {
  event.preventDefault();
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
