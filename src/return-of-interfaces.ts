export {};

class Mahotsukai {};
class Souryo {};

class Ryusei extends Mahotsukai {};

interface Senshi {
  kogeki(): void;
}
interface Kenja {
  ionazun(): void;
}

class Jiro implements Kenja, Senshi  {
  ionazun(): void {
    console.log('ionazun')
  }
  kogeki(): void {
    console.log('kogeki')
  }
};

const jiro = new Jiro();
jiro.kogeki();
jiro.ionazun();