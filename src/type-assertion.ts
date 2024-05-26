export {};

let name: any = 'Ryusei';
// let length: number = name.length as number;
// let length: number = (name as string).length;
// ⇩推奨されていない。reactのjsxに同じ表記があるため　asで書くのが良い
let length: number = (<string>name).length;

