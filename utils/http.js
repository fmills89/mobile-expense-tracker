import axios from 'axios';

const BACKEND_URL =
  'https://mobile-expense-app-46891-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + '/expenses.json',
    expenseData
  );
  const id = response.data.name;
  return id;
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
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  // transform data sent back from firebase into array of object into
  // format we want it in
  return expenses;
}
