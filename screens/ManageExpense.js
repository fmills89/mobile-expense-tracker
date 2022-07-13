import { Text, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  // converting val into boolean !!
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return <Text>AllExpenses screen</Text>;
}

export default ManageExpense;

const styles = StyleSheet.create({});
