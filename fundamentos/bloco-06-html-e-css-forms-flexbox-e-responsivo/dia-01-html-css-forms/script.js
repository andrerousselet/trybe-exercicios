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

window.onload = function () {
  const submitButton = document.getElementById('btn-submit');
  const clearButton = document.getElementById('btn-clear');
  submitButton.addEventListener('click', submit);
  clearButton.addEventListener('click', clear);
}