const makePromise = () => {
  return new Promise<string>((resolved, reject) => {
    const data: string = "Data is fetched";

    if (data) {
      resolved(data);
    } else {
      reject("Failed to fetched data");
    }
  });
};

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await response.json();
};

const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};
getTodoData();
const makePromiseBoolean = () => {
  return new Promise<boolean>((resolved, reject) => {
    const data: boolean = true;

    if (data) {
      resolved(data);
    } else {
      reject("Failed to fetched data");
    }
  });
};

const getPromiseDataBoolean = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  return data;
};

type DataType = {
  data: string;
};

const makePromiseObject = () => {
  return new Promise<DataType>((resolved, reject) => {
    const data: DataType = { data: "Data is fetched" };

    if (data) {
      resolved(data);
    } else {
      reject("Failed to fetched data");
    }
  });
};

const getPromiseDataObject = async (): Promise<object> => {
  const data = await makePromiseObject();
  return data;
};
