document.getElementById('header-container').style.background = 'green';

document.querySelector('.emergency-tasks').style.background = 'orange';

document.querySelector('.no-emergency-tasks').style.background = 'rgb(232, 235, 83)';

let h3s = document.querySelectorAll('h3');
for (let i = 0; i < 2; i += 1) {
  h3s[i].style.background = 'purple';
}
for (let i = 2; i < 4; i += 1) {
  h3s[i].style.background = 'black';
}

document.querySelector('footer').style.background = 'rgb(0, 40, 0)';