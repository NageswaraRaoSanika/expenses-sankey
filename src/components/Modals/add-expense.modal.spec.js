import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddExpenseModal from "./add-expense.modal.component";

test("loads and displays greeting", async () => {
  render(
    <AddExpenseModal
      show={true}
      path={[]}
      onClose={() => undefined}
      onSave={() => undefined}
    />
  );

  await screen.findByRole("heading");
  expect(screen.getByRole("heading")).toHaveTextContent("Add Expense");
});
