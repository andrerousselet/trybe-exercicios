//Parte I
//Exercicio 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(false);


//Exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordemCrescente = numbers => numbers.sort((a, b) => a - b);

console.log(`Os números ${ordemCrescente(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉