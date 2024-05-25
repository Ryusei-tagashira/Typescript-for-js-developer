export {};

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
}
console.log(nextYearSalary(2000, 1.01));
console.log(nextYearSalary(2000));