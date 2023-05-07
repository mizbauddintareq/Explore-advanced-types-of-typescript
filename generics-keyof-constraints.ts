type PersonType = {
  name: string;
  age: number;
  address: string;
};

type NewTypeUsingKeyof = keyof PersonType;

const a: NewTypeUsingKeyof = "address";
