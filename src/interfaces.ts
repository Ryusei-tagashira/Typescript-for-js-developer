export {};

type objectType = {
  name: string;
  age: number;
};

interface objectInterface {
  name: string;
  age: number;
}

let object:{name: string, age: number} = {
  name: 'testa',
  age: 43
};

let object2:objectInterface = {
  name: 'testa',
  age: 43
};
console.log(object2);