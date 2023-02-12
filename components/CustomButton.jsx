import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import { colors } from '../helpers/variables';

const CustomButton = ({ text, onPressFunc }) => {
  return (
    <TouchableOpacity onPress={onPressFunc} activeOpacity={0.8} style={s.button}>
      <Text style={s.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  button: {
    padding: 16,
    marginTop: 27,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: `${colors.themeColor}`,
  },
  text: {
    color: `${colors.white}`,
  },
});

export default CustomButton;
