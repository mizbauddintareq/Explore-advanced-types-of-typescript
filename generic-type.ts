type GenericArray<T> = Array<T>;

const rollNumbers: GenericArray<number> = [12, 13, 13];
const studentNames: GenericArray<string> = ["Abul", "mabul", "kabul"];
const isIt: GenericArray<boolean> = [true, false];

type studentsInfo = {
  name: string;
  age: number;
};

const userNameAndRoll: GenericArray<studentsInfo> = [
  { name: "salam", age: 20 },
  { name: "kalam", age: 30 },
];

type MyGenericInfo<X, Y> = [X, Y];

const relation: MyGenericInfo<string, string> = ["Mizba", "Uddin"];

const myStatus: MyGenericInfo<object, string> = [
  {
    name: "habib",
    age: 23,
  },
  "Abulu",
];
