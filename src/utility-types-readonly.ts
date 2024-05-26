export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43,
};

me.age++;

type PersonalDataType = Readonly<Profile>

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 40,
}

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P]
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;

const stranger: YomitoriSenyoProfile = {
  name: 'Shigeru',
  age: 40,
}
console.log(stranger)