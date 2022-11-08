import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/header";
import SankeyChart from "../../components/sankey";

import {
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
                  <div className="column is-8">{key}</div>
                  <div className="column columns is-4 mt-0">
                    <span className="tag is-success mr-1">
                      <input
                        style={{ width: "90px" }}
                        type="text"
                        readOnly
                        disabled
                        value={recSum(expenses[key])?.toLocaleString()}
                        onChange={(evt) => console.log(prevKeys, key)}
                      />
                    </span>

                    <button type="button" className="button tag is-danger">
                      Delete
                    </button>
                  </div>
                </div>
                <ul>{renderExpenses(expenses[key], [...prevKeys, key])}</ul>
              </li>
            );
          } else {
            return (
              <li key={key}>
                <div className="columns">
                  <div className="column is-8">{key}</div>
                  <div className="column columns is-4 mt-0">
                    <span className="tag is-success mr-1">
                      <input
                        style={{ width: "90px" }}
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
                    <button type="button" className="button tag is-danger">
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
    <div>
      <Header />
      <div className="columns  p-6">
        <div className="column is-8">
          <h3 className="title is-3 has-text-primary">Expenditures</h3>
          {chartData.length && !loading ? (
            <SankeyChart data={chartData} />
          ) : (
            "Loading Expenses"
          )}
        </div>
        <div className="column is-4">
          <nav className="level">
            <div className="level-item ">
              <div>
                <p className="heading">Total Expenses</p>
                <p className="title">{recSum(data)?.toLocaleString()}</p>
              </div>
            </div>
          </nav>
          <hr />
          {renderExpenses(data)}
        </div>
      </div>
    </div>
  );
};

export default ExpensesPage;
