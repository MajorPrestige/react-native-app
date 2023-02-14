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
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    marginBottom: 32,
  },

  innerForm: {
    marginHorizontal: 16,
  },

  input: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,

    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
    height: 50,
    borderRadius: 8,
    color: `${colors.titleColor}`,
    borderColor: `${colors.borderColor}`,
    backgroundColor: `${colors.bgcolor}`,
  },
  
  inputBtn: {
    position: "absolute",
    top: '23%',
    right: 16,
  },

  inputText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: `${colors.notification}`,
  },

  question: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: `${colors.notification}`,

    textAlign: 'center',
    marginTop: 16,
  },
});

export default authStyles;
