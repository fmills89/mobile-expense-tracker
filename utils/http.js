import axios from 'axios';

const BACKEND_URL =
  'https://mobile-expense-app-46891-default-rtdb.firebaseio.com';

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + '/expenses.json', expenseData);
}

// async function will yield a promise
// promise is an object waiting to resolve and get ahold of data
export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');

  const expenses = [];

  for (const key in response.data) {
    // for every key creating new expenses object
    // give us propertly formatted data
    const expenseObj = {
      id: key,
      // syntax dynamic access a properties which name is stored in key constant
      amount: response.data[key].amount,
      date: response.date[key].date,
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  // transform data sent back from firebase into array of object into
  // format we want it in
  return expenses;
}
