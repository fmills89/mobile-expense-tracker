import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://mobile-expense-app-46891-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
}
