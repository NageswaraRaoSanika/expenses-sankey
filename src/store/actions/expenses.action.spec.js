import {
  addExpenseData,
  getExpensesData,
  updateExpenseData,
} from "./expenses.actions";
import { configureStore } from "@reduxjs/toolkit";

describe("Expense Actions", () => {
  it("should call addExpense action and update store", async () => {
    const data = {};
    const store = configureStore({
      reducer: (state = { loading: false, data: {} }, action) => {
        switch (action.type) {
          case "expenses/addExpense/pending":
            return { loading: false, data: {} };
          case "expenses/addExpense/fulfilled":
            return {
              loading: false,
              data: {
                total: 30,
              },
            };
          default:
            return state;
        }
      },
    });
    await store.dispatch(addExpenseData(data, ["total"], 30));
    const state = store.getState();
    expect(state).toEqual({ loading: false, data: { total: 30 } });
  });

  it("should call getExpenses action and update store", async () => {
    const store = configureStore({
      reducer: (state = { loading: false, data: {} }, action) => {
        switch (action.type) {
          case "expenses/getExpense/pending":
            return { loading: false, data: {} };
          case "expenses/getExpenses/fulfilled":
            return {
              loading: false,
              data: {
                total: 1000,
              },
            };
          default:
            return state;
        }
      },
    });
    await store.dispatch(getExpensesData());
    const state = store.getState();
    expect(state).toEqual({ loading: false, data: { total: 1000 } });
  });

  it("should call updateExpense action and update store", async () => {
    const store = configureStore({
      reducer: (state = { loading: false, data: {} }, action) => {
        switch (action.type) {
          case "expenses/updateExpense/pending":
            return { loading: false, data: {} };
          case "expenses/updateExpense/fulfilled":
            return {
              loading: false,
              data: {
                total: 30,
              },
            };
          default:
            return state;
        }
      },
    });
    await store.dispatch(updateExpenseData({}, ["total"], 30));
    const state = store.getState();
    expect(state).toEqual({ loading: false, data: { total: 30 } });
  });
});
