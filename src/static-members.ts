export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Ryusei';
  static lastName: string = 'Tgashira';

  static Worker() {
    return `Hey, I'm ${this.firstName}. Today is so nice day`;
  }
}
// 静的メンバにしているため。インスタンスを作成する必要はない
// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.Worker());