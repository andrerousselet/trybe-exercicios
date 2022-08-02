function myNumber(num) {
  switch(true) {
    case typeof num !== 'number': return 'o valor deve ser um número';
    case num > 0: return 'positivo';
    case num < 0: return 'negativo';
    case num === 0: return 'neutro';
    default: return;
  }
}

module.exports = { myNumber }
