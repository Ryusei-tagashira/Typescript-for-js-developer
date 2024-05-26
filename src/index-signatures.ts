export {};
interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean
}

let profile: Profile = { name: 'Ham', underTwenty: false };
// how to write index signatures
// { [ index: typeForIndex ]: typeForValue}
profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan'
// profile.age = 43