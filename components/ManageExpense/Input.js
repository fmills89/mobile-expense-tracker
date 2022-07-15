import { Text, View, TextInput } from 'react-native';

function Input({ label, type, textInputConfig }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}

export default Input;
