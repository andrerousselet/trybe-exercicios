const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//Parte 1
//Exercicio 1
const dragonAttack = () => Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;
//Exercicio 2
const warriorAttack = () => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength + 1) + warrior.strength);
//Exercicio 3
const mageAttack = () => {
  const attack = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence + 1) + mage.intelligence);
  const object = {
    attack: 0,
    mana: 'Não possui mana suficiente'
  };
  if (mage.mana > 15) {
    object.attack = attack;
    object.mana = 15;
    return object;
  }
  return object;
};


//Parte 2
const gameActions = {
  //Exercicio 1
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack();
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },
  //Exercicio 2
  mageTurn: (mageAttack) => {
    const mageObject = mageAttack();
    const mageDamage = mageObject.attack;
    mage.damage = mageDamage;
    mage.mana -= mageObject.mana;
    dragon.healthPoints -= mageDamage;
  },
  //Exercicio 3
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack();
    warrior.healthPoints -= dragonDamage;
    mage.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  //Exercicio 4
  turnResult: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResult());