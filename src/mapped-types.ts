export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
}

type PartialProfile = Partial<Profile>;
type OptionalProfile = Optional<Profile>;

type Optional<T> = {
    [P in keyof T]?: T[P] | null;
};

