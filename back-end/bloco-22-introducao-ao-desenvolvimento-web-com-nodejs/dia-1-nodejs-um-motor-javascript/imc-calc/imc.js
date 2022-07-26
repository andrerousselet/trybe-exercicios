function calcImc(height, weight) {
  return (weight / Math.pow(height, 2)).toFixed(2);
}

console.log(calcImc(1.72, 70));
