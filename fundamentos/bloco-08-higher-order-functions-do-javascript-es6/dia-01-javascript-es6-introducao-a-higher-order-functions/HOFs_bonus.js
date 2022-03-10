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
const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;
//Exercicio 2
const warriorDamage = () => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength + 1) + warrior.strength);
//Exercicio 3
const mageDamage = () => {
  const damage = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence + 1) + mage.intelligence);
  const object = {
    damage: 0,
    mana: 'Não possui mana suficiente'
  };
  if (mage.mana > 15) {
    object.damage = damage;
    object.mana = 15;
    return object;
  }
  return object;
};
console.log(mageDamage());