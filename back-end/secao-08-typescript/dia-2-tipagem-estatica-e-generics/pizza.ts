type Slices = 4 | 6 | 8;

interface Pizza {
  flavour: string,
  slices: Slices,
}

const calabresa: Pizza = {
  flavour: 'calabresa',
  slices: 8,
}

const marguerita: Pizza = {
  flavour: 'marguerita',
  slices: 6,
}

const nutela: Pizza = {
  flavour: 'nutela',
  slices: 4,
}

console.log([calabresa, marguerita, nutela]);
