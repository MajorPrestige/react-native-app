import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import authStyles from './auth.styles';
import { imageBg } from './auth.styles';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={imageBg} resizeMode="cover" style={authStyles.imageBg}>
        {/* <Text>Let's go</Text>  */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default LoginScreen;
