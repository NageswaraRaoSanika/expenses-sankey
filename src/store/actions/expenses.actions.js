import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addExpense,
  deleteExpense,
  getExpenses,
  updateExpenses,
} from "../../apis";

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(getExpensesData())`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are

// typically used to make async requests.
export const getExpensesData = createAsyncThunk(
  "expenses/getExpenses",
  async () => {
    const response = await getExpenses();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const addExpenseData = createAsyncThunk(
  "expenses/addExpense",
  async ({ data, path, value }) => {
    const response = await addExpense({ data, path, value });

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const updateExpenseData = createAsyncThunk(
  "expenses/updateExpense",
  async ({ data, path, value }) => {
    const response = await updateExpenses({ data, path, value });

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const deleteExpenseData = createAsyncThunk(
  "expenses/deleteExpense",
  async ({ data, path }) => {
    const response = await deleteExpense({ data, path });

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
