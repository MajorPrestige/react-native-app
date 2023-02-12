import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';

import CustomButton from '../../components/CustomButton';

import authStyles from './auth.styles';
import { imageBg } from './auth.styles';
import { colors } from '../../helpers/variables';

const RegistrationScreen = () => {
  return (
    <View style={authStyles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={imageBg}
        resizeMode="cover"
        style={authStyles.imageBg}
      >
        <View style={authStyles.innerForm}>
          <TextInput style={authStyles.input}  placeholder="Login"
          placeholderTextColor={colors.textColor}/>
          <TextInput style={authStyles.input} placeholder="Email"
          placeholderTextColor={colors.textColor}/>
          <TextInput style={authStyles.input} placeholder="Password"
          secureTextEntry
          placeholderTextColor={colors.textColor}/>
          <CustomButton text="SIGN UP"/>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RegistrationScreen;
