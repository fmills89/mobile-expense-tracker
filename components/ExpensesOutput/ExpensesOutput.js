import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    data: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'Shorts',
    amount: 19.6,
    data: new Date('2021-12-21'),
  },
  {
    id: 'e3',
    description: 'Jeans',
    amount: 69.3,
    data: new Date('2021-12-22'),
  },
  {
    id: 'e4',
    description: 'Groceries',
    amount: 120.13,
    data: new Date('2021-12-31'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});
