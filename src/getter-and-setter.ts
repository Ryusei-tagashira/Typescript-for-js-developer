export {};

class MyNumberCard {
// owner
//  * 所有者
//   * 初期化時に設定
//   * 参照できる
//   * 変更できない
// secretNumber
//  * 個人番号
//   * 初期化時に設定
//   * 参照できない
//   * 変更できる

  private _owner: string;
  private _secretNumber: number;
  constructor(owner: string, secretNumber:number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner(): string { return this._owner; }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint(){
    return `secretNumber: ${this._secretNumber}`
  };

}

let card = new MyNumberCard('ryusei', 2333);
console.log(card);
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 1111111
console.log(card.debugPrint());

