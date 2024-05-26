export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person{
      constructor(
        public name: string
      ) {}
    }
  }
  export namespace Osaka {
    export class Person{
      constructor(
        public name: string
      ) {}
    }
  }
}
namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public lastName: string,
      public middleName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('hamsan');
const meOsaka = new Japanese.Tokyo.Person('hamyan');
console.log(me.name);
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael.firstName, michael.lastName, michael.middleName);