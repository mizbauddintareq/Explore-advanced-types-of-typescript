const createArray = (param: string): string[] => {
  return [param];
};
const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};
function createArray2<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
}

type Name = { name: string; age: number };

const result1 = createArray1<string, number>("Bangladesh", 123);
const result2 = createArray1<boolean, string>(false, "USA");
const result3 = createArray1<Name, Array<string>>(
  {
    name: "mizba",
    age: 23,
  },
  ["Habib", "Nargis"]
);

// spread operator

const myInfo = {
  name: "Mamo",
  age: 29,
  job: "Developer",
};

const meAndCrush = <T>(param: T) => {
  const crush = "Promi";
  const newData = { ...param, crush };
  return newData;
};

const result4 = meAndCrush(myInfo);
