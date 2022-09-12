const capUnits: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function capConvert(value: number, from: string, to: string): number {
  const fromInd = capUnits.indexOf(from);
  const toInd = capUnits.indexOf(to);
  return value * (10 ** (toInd - fromInd));
}

console.log(capConvert(100, 'kl', 'l'));
console.log(capConvert(1000, 'ml', 'kl'));
