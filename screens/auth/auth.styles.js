import { StyleSheet } from 'react-native';

export const imageBg = require('../../assets/images/bg.png');

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default authStyles;