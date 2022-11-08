import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./reducers/expenses.reducer";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
});
