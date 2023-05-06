interface Iuser {
  name: string;
  age: number;
  job?: boolean;
}

/* const userWithInterface: Iuser = {
  name: "Abdul",
  age: 200,
};
 */

interface IExtendUser extends Iuser {
  role: boolean;
}

const newUser: IExtendUser = {
  name: "Halim",
  age: 20,
  role: true,
};

type addTwoNumbers = (num1: number, num2: number) => number;
const add: addTwoNumbers = (num1, num2) => num1 + num2;
