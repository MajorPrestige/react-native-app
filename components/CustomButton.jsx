import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import { colors } from '../helpers/variables';

const CustomButton = ({text}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={s.button}>
      <Text style={s.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  button: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 27,
    backgroundColor: `${colors.themeColor}`,
  },
  text: {
    color: `${colors.white}`,
  }
});

export default CustomButton;
