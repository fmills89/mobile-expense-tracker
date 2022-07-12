import { Text, StyleSheet } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 days" />;
}

export default RecentExpenses;

const styles = StyleSheet.create({});
