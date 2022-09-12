type Slices = 4 | 6 | 8;

type Common = 'calabresa' | 'frango' | 'pepperoni';
type Veg = 'marguerita' | 'palmito' | 'cogumelo';
type Sweet = 'nutela com banana' | 'romeu e julieta' | 'chocolate com morango';

interface Pizza {
  flavour: string,
  slices: Slices,
}

// const calabresa: Pizza = {
//   flavour: 'calabresa',
//   slices: 8,
// }

// const marguerita: Pizza = {
//   flavour: 'marguerita',
//   slices: 6,
// }

// const nutela: Pizza = {
//   flavour: 'nutela',
//   slices: 4,
// }

// console.log([calabresa, marguerita, nutela]);

interface CommonPizza extends Pizza {
  flavour: Common;
}

interface VegPizza extends Pizza {
  flavour: Veg;
}

interface SweetPizza extends Pizza {
  flavour: Sweet;
  slices: 4;
}

const frango: CommonPizza = {
  flavour: "frango",
  slices: 8,
}

const palmito: VegPizza = {
  flavour: "palmito",
  slices: 6,
}

const romeuEJulieta: SweetPizza = {
  flavour: "romeu e julieta",
  slices: 4,
}

console.log([frango, palmito, romeuEJulieta]);
