export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('message');
  console.log(result);
} catch (e) {
  console.log({e});
}
// let foo: void = undefined;
// let hoge: never = error('foo');