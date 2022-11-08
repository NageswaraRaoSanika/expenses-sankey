import { createSlice } from "@reduxjs/toolkit";
import {
  addExpenseData,
  deleteExpenseData,
  getExpensesData,
  updateExpenseData,
} from "../actions/expenses.actions";

const initialState = {
  data: {},
  loading: false,
};

export const expenses = createSlice({
  name: "expenses",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getExpensesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExpensesData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = { ...action.payload };
      })
      .addCase(addExpenseData.pending, (state) => {
        state.loading = true;
      })
      .addCase(addExpenseData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = { ...action.payload };
      })
      .addCase(updateExpenseData.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateExpenseData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = { ...action.payload };
      })
      .addCase(deleteExpenseData.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteExpenseData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = { ...action.payload };
      });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectExpenses = (state) => state.expenses;

export default expenses.reducer;
