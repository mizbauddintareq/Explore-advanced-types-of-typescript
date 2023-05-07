const numbers = [1, 2, 3];
const newNumbers = numbers.map((number) => number.toString());
console.log(newNumbers);

type AreaNumber = {
  height: number;
  width: number;
};
type AreaString = {
  height: string;
  width: string;
};

type A = AreaNumber["height"];
type B = keyof AreaNumber;
