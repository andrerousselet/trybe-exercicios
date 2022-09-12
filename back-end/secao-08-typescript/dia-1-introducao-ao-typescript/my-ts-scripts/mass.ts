const massUnits: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function massConvert(value: number, from: string, to: string): number {
  const fromIn = massUnits.indexOf(from);
  const toIn = massUnits.indexOf(to);
  return value * (10 ** (toIn - fromIn));
}

console.log(massConvert(10, 'kg', 'g'));
console.log(massConvert(100, 'cg', 'kg'));
