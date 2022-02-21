function submit(event) {
  event.preventDefault();
}

window.onload = function () {
  const button = document.getElementById('btn');
  button.addEventListener('click', submit);
}
