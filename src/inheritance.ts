export {};

class Animal {
  constructor(public name: string){}

  run(): string {
    return 'I can run'
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number){
    super(name);
    this.speed = speed;
  }
  run(): string {
    const parentMessage = super.run();
    return `${parentMessage} ${this.speed}km/h`
  }
}

let animal = new Animal('Mickey');
console.log(animal.run());

let lion = new Lion('shimba', 100);
console.log(lion.run());
