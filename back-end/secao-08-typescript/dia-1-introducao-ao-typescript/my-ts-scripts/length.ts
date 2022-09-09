const units: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert(value: number, from: string, to: string): number {
  const fromI = units.indexOf(from);
  const toI = units.indexOf(to);
  return value * (10 ** (toI - fromI));
}

console.log(convert(1000, 'km', 'm'));
console.log(convert(100, 'cm', 'km'));
