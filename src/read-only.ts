export {};

class VisaCard {
  // publicであることは自明のため書かなくて良い
  // constructor(public readonly owner: string) {
  //   this.owner = owner;
  // }
  constructor(readonly owner: string) {
    this.owner = owner;
  }
}

let myVisaCard = new VisaCard('Ryusei')
console.log(myVisaCard)
// myVisaCard.owner = 'tagashira';
