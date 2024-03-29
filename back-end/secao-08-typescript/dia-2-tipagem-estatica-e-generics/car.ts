enum Colors {
  black = 'preta',
  white = 'branca',
  red = 'verelha',
  silver = 'prata',
}

enum Doors {
  driver = 'do motorista',
  ride = 'do carona',
  passanger = 'dos passageiros',
}

enum Directions {
  left = 'esquerda',
  right = 'right',
}

class Car {
  brand: string;
  color: Colors;
  doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Buzina: BIP BIIIP')
  }

  openTheDoor(door: Doors): void {
    console.log(`Abre a porta ${door}`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Fecha a porta ${door}`);
  }

  turnOn(): void {
    console.log('Liga o carro')
  }

  turnOff(): void {
    console.log('Desliga o carro')
  }

  speedUp(): void {
    console.log('Acelera o carro')
  }

  speedDown(): void {
    console.log('Desacelera o carro')
  }

  stop(): void {
    console.log('Para o carro');
  }

  turn(direction: Directions): void {
    console.log(`Vira o carro para a ${direction}`);
  }
}

const gol = new Car('Volkswagen', Colors.silver, 4);

gol.openTheDoor(Doors.driver);
gol.closeTheDoor(Doors.driver);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.left);
gol.speedUp();
gol.speedDown();
gol.stop();
gol.honk();
gol.openTheDoor(Doors.passanger);
gol.closeTheDoor(Doors.passanger);
gol.speedUp();
gol.speedDown();
gol.stop();
gol.turnOff();
gol.openTheDoor(Doors.driver);
gol.openTheDoor(Doors.passanger);
gol.closeTheDoor(Doors.driver);
gol.closeTheDoor(Doors.passanger);
