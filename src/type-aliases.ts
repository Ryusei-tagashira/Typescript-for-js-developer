export {};

type Mojiretsu = string;

const fooString: string = 'foo';
const fooMojiretsu: Mojiretsu = 'foo';

const example1 = {
  name: 'Ham',
  age: 43
};

type profile = {
  name: string;
  age: number
};

const example2: profile = {
  name: 'Ham',
  age: 43
}

type Profile2 = typeof example1;