import {
  addExpenseData,
  getExpensesData,
  updateExpenseData,
} from "../actions/expenses.actions";
import expensesReducer from "./expenses.reducer";

describe("Expenses Reducer", () => {
  describe("reducers", () => {
    const initialState = {
      data: {},
      loading: false,
    };

    it("Loading before getting expenses", () => {
      const action = { type: getExpensesData.pending.type };
      const state = expensesReducer(initialState, action);
      expect(state).toEqual({ loading: true, data: {} });
    });

    it("get expenses", () => {
      const action = {
        type: addExpenseData.fulfilled.type,
        payload: {},
      };
      const state = expensesReducer(initialState, action);
      expect(state).toEqual({ loading: false, data: {} });
    });

    it("Loading before adding expenses", () => {
      const action = { type: addExpenseData.pending.type };
      const state = expensesReducer(initialState, action);
      expect(state).toEqual({ loading: true, data: {} });
    });

    it("add expenses", () => {
      const action = {
        type: addExpenseData.fulfilled.type,
        payload: { expenses: 20 },
      };
      const state = expensesReducer(initialState, action);
      expect(state).toEqual({ loading: false, data: { expenses: 20 } });
    });

    it("before update expenses", () => {
      const action = { type: updateExpenseData.pending.type };
      const state = expensesReducer(initialState, action);
      expect(state).toEqual({ loading: true, data: {} });
    });

    it("update expenses", () => {
      const action = {
        type: updateExpenseData.fulfilled.type,
        payload: { expenses: 10 },
      };
      const state = expensesReducer(initialState, action);
      expect(state).toEqual({ loading: false, data: { expenses: 10 } });
    });
  });
});
