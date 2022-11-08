import React, { useEffect, useState } from "react";

const AddExpenseModal = ({ show, path, onClose, onSave }) => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseValue, setExpenseValue] = useState("");

  useEffect(() => {
    if (show) {
      setExpenseName("");
      setExpenseValue("");
    }
  }, [show]);

  return (
    show && (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(path, expenseName, expenseValue);
        }}
        className={`modal is-active`}
      >
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add Expense</p>
            <button
              onClick={onClose}
              className="delete"
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">
            Add Expense in {path.join("->")}
            <input
              type="text"
              className="input m-2"
              value={expenseName}
              placeholder="Name"
              required
              onChange={(e) => setExpenseName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              required
              className="input   m-2"
              value={expenseValue}
              onChange={(e) => setExpenseValue(e.target.value)}
            />
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" type="submit">
              Add Expense
            </button>
            <button onClick={onClose} className="button">
              Cancel
            </button>
          </footer>
        </div>
      </form>
    )
  );
};

export default AddExpenseModal;
