export {};

class VisaCard {
  constructor(public readonly owner: string) {
    this.owner = owner;
  }
}

let myVisaCard = new VisaCard('Ryusei')
console.log(myVisaCard)
// myVisaCard.owner = 'tagashira';
