import { StyleSheet } from 'react-native';

import { colors } from '../../helpers/variables';

export const imageBg = require('../../assets/images/bg.png');

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    textAlign: 'center',
    marginBottom: 32,
  },
  innerForm: {
    marginHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
    height: 50,
    borderRadius: 8,
    color: `${colors.titleColor}`,
    borderColor: `${colors.borderColor}`,
    backgroundColor: `${colors.bgcolor}`,
  },
  question: {
    marginTop: 16,
    textAlign: 'center',
  },
});

export default authStyles;
