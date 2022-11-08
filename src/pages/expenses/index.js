import React, { useEffect, useState, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import AddExpenseModal from "../../components/Modals/add-expense.modal.component";
import SankeyChart from "../../components/sankey";

import {
  addExpenseData,
  deleteExpenseData,
  getExpensesData,
  updateExpenseData,
} from "../../store/actions/expenses.actions";
import { selectExpenses } from "../../store/reducers/expenses.reducer";

export const recSum = (obj) => {
  return Object.values(obj).reduce((acc, curr) => {
    acc += typeof curr === "object" ? recSum(curr) : curr;
    return acc;
  }, 0);
};

export const makeChartData = (data = {}) => {
  const chartData = [];

  const recPaths = (obj, from) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof obj[key] === "object") {
        if (from) chartData.push([from, key, recSum(obj[key])]);
        recPaths(obj[key], key);
      } else chartData.push([from, key, value]);
    });
  };

  recPaths(data);

  return chartData;
};

const ExpensesPage = () => {
  const { data, loading } = useSelector(selectExpenses);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const [addExpensePath, setAddExpensePath] = useState([]);

  useEffect(() => {
    dispatch(getExpensesData());
  }, [dispatch]);

  const chartData = makeChartData(data);

  const renderExpenses = (expenses, prevKeys = []) => {
    return (
      <ul key={expenses?.name} className="menu-list">
        {Object.entries(expenses).map(([key, value]) => {
          if (typeof expenses[key] === "object") {
            return (
              <li key={key}>
                <div className="columns">
                  <div className="column is-8">
                    {t(key)}
                    <button
                      onClick={() => setAddExpensePath([...prevKeys, key])}
                      type="button"
                      className="ml-2 button is-small tag is-light"
                    >
                      {t("Add Expense")}
                    </button>
                  </div>
                  <div className="column columns is-4 mt-0">
                    <span className="tag is-success mr-1">
                      <input
                        style={{ width: "80px" }}
                        type="text"
                        readOnly
                        disabled
                        value={recSum(expenses[key])?.toLocaleString()}
                      />
                    </span>

                    {key !== "Total Expenses" && (
                      <button
                        onClick={(evt) =>
                          dispatch(
                            deleteExpenseData({
                              data,
                              path: [...prevKeys, key],
                            })
                          )
                        }
                        type="button"
                        className="button tag is-danger"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
                <ul>{renderExpenses(expenses[key], [...prevKeys, key])}</ul>
              </li>
            );
          } else {
            return (
              <li key={key}>
                <div className="columns">
                  <div className="column is-8">
                    {t(key)}
                    <button
                      onClick={() => setAddExpensePath([...prevKeys, key])}
                      type="button"
                      className="ml-2 button is-small tag is-light"
                    >
                      Add Expense
                    </button>
                  </div>
                  <div className="column columns is-4 mt-0">
                    <span className="tag is-success mr-1">
                      <input
                        style={{ width: "80px" }}
                        type="number"
                        value={value}
                        onChange={(evt) =>
                          dispatch(
                            updateExpenseData({
                              data,
                              path: [...prevKeys, key],
                              value: evt.target.value,
                            })
                          )
                        }
                      />
                    </span>
                    <button
                      onClick={(evt) =>
                        dispatch(
                          deleteExpenseData({
                            data,
                            path: [...prevKeys, key],
                          })
                        )
                      }
                      type="button"
                      className="button tag is-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            );
          }
        })}
      </ul>
    );
  };

  return (
    <Suspense fallback="loading">
      <div>
        <Header />
        <div className="columns  p-6">
          <div className="column is-8">
            <h3 className="title is-3 has-text-primary">
              <nav className="level">
                <div className="level-item ">
                  <div>
                    <p className="heading">{t("Total Expenses")}</p>
                    <p className="title">{recSum(data)?.toLocaleString()}</p>
                  </div>
                </div>
              </nav>
            </h3>
            {chartData.length && !loading ? (
              <SankeyChart data={chartData} />
            ) : null}
          </div>
          <div className="column is-4">
            {renderExpenses(data)}
            <AddExpenseModal
              onClose={() => setAddExpensePath([])}
              onSave={(path, name, value) => {
                dispatch(
                  addExpenseData({
                    data,
                    path: [...path, name],
                    value,
                  })
                );
                setAddExpensePath([]);
              }}
              show={addExpensePath.length > 0}
              path={addExpensePath}
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ExpensesPage;
