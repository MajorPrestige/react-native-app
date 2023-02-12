import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import authStyles from './auth.styles';
import { imageBg } from './auth.styles';

const LoginScreen = () => {
  return (
    <View style={authStyles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={imageBg}
        resizeMode="cover"
        style={authStyles.imageBg}
      >
        <View style={authStyles.innerForm}>
          <TextInput style={authStyles.input} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
