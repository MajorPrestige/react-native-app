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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 27,
    borderRadius: 100,
    backgroundColor: `${colors.themeColor}`,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: `${colors.white}`,
  },
});

export default CustomButton;
