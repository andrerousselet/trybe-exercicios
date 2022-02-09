const paragraph = document.getElementById("paragraph");

paragraph.style.color = "red";

// document.getElementById('page-title').innerText = 'Um Sonho de Liberdade';

// document.getElementById('second-paragraph').innerText = 'Esse filme é um dos melhores de todos os tempos; conta com atuações magistrais e possui uma história linda sobre como lidar com a vida "como ela é" e fazer o melhor que seja possível.';

// document.getElementById('subtitle').innerText = 'Grande filme sobre superação';

// document.getElementsByClassName('paragraph')[0].style.color = 'green';

// let h4 = document.getElementsByTagName('h4')[0];
// h4.style.color = 'brown';

document.querySelector('#page-title').innerText = 'Um sonho de liberdade';

document.querySelector('#subtitle').innerText = 'Grande filme sobre superação';

document.querySelector('#second-paragraph').innerText = 'Esse filme é um dos melhores de todos os tempos; conta com atuações magistrais e possui uma história linda sobre como lidar com a vida "como ela é" e fazer o melhor que seja possível.';

let paragraphs = document.querySelectorAll('.paragraph');
for (let index = 0; index < paragraphs.length; index += 1) {
  paragraphs[index].style.color = 'green';
}