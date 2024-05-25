export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

const MonthsJs= {
  January: 0
}
console.log(MonthsJs.January);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF'
}

let red = COLORS.RED;
console.log({red});

enum  COLORS{
  YELLOW = '#FFFF00'
}

