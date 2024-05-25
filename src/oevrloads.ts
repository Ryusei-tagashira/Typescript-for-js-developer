export {};

function double(value:string): string
function double(value:number): number

function double(value:any):any {
  if (typeof value === 'string'){
    return value + value;
  } else {
    return value * 2;
  }
  // } else{
  //   throw 'numberでもstringでもないので、引数の型を確認してください'
  // }
  // signatureで型を決めているので、関係なくなる
};
console.log(double(100));

// function double(value:string):string {
//   return value + value;
// }
console.log(double(100));
console.log(double('go'));
// console.log(double(true));
