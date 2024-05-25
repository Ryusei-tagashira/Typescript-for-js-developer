export {};


let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
  //arrow関数だとreturnを省略できる。
): number => weight / (height * height);
//): number =>{ return weight / (height * height) };


console.log(bmi(1.77, 78))