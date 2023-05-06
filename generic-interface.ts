interface crushInterface<T> {
  name: string;
  husband: T;
}

const crush1: crushInterface<string> = { name: "Promi", husband: "Mizba" };
