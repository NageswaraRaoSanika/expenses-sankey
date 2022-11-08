import { cloneDeep, set, unset } from "lodash";

const expenses = {
  "Total Expenses": {
    EMIs: {
      "HDFC Personal Loan": 12000,
      "Axis Car Loan": 13000,
      "SBI Home Loan": 20000,
    },
    "Home Expenditures": {
      "Food&Groceries": {
        Food: {
          Vegatables: 2500,
          Fruits: 1000,
          Kitchen: 1500,
        },
        "Other Groceries": 2000,
      },
      Electricity: 1500,
      Internet: 1500,
      "Maid Salary": 5000,
    },
    Fuel: {
      Petrol: 5000,
    },
    Entertainment: {
      Cinemas: 1000,
      Outings: 2000,
      "OTT Platforms": {
        Hotstar: 500,
        Netflix: 1000,
        Zee5: 500,
      },
    },
  },
};

// A mock function to mimic making an async request for data
export const getExpenses = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: expenses }), 500)
  );
};

export const updateExpenses = async ({ data, path, value }) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const newData = cloneDeep(data);
      set(newData, path, Number(value));
      resolve({ data: newData });
    }, 0)
  );
};

export const addExpense = async ({ data, path, value }) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const newData = cloneDeep(data);
      set(newData, path, Number(value));
      resolve({ data: newData });
    }, 0)
  );
};

export const deleteExpense = async ({ data, path }) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const newData = cloneDeep(data);
      unset(newData, path);
      resolve({ data: newData });
    }, 0)
  );
};
