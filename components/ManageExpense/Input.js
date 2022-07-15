import { Text, View, TextInput, StyleSheet } from 'react-native';

function Input({ label, type, textInputConfig }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}

export default Input;
