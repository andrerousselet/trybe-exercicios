   /*
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
  */

    // Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
    function changeTextInTagP(element) {
      let tags = document.getElementsByTagName(element);
      for (let i = 0; i < tags.length; i += 1) {
        tags[i].innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    }

    changeTextInTagP('p');


    // Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
    function changeColorOfBigSquare(element) {
      let squares = document.getElementsByClassName(element);
      console.log(squares);
      for (let item of squares) {
        item.style.background = 'rgb(76,164,109)'
      }
    }

    changeColorOfBigSquare('main-content');


    // Crie uma função que mude a cor do quadrado vermelho para branco.
    function changeColorOfSmallSquare(element) {
      document.getElementById(element).style.background = 'white';
    }

    changeColorOfSmallSquare('center-content');


    // Crie uma função que corrija o texto da tag <h1>.
    function correctTextOfTitle(element) {
      let title = document.getElementsByTagName(element)[0];
      title.innerText = 'Exercício 5.1 - JavaScript'
    }

    correctTextOfTitle('h1');


    // Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
    function changeToUpper(element) {
      let paragraphs = document.getElementsByTagName(element);
      // for (let index = 0; index < paragraphs.length; index += 1) {
      //   paragraphs[index].innerText = paragraphs[index].innerText.toUpperCase();
      // }
      paragraphs[0].innerText = paragraphs[0].innerText.toUpperCase();
    }
    changeToUpper('p');

    // Crie uma função que exiba o conteúdo de todas as tags <p> no console.
    function showInConsole(element) {
      let paragraphs = document.getElementsByTagName(element);
      for (let i = 0; i < paragraphs.length; i += 1) {
        console.log(paragraphs[i].innerText);
      }
    }
    showInConsole('p');