import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Platform,
  View,
  ImageBackground,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import CustomButton from '../../components/CustomButton';

import authStyles from './auth.styles';
import { imageBg } from './auth.styles';
import { colors } from '../../helpers/variables';
import { useKeyboardShow } from '../../hooks/useKeybaordShow';

const initialState = {
  login: '',
  email: '',
  password: '',
};

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useKeyboardShow();
  const [values, setValues] = useState(initialState);

  const handleInputChange = (value, key) => {
    setValues((initialState) => ({ ...initialState, [key]: value }));
  };

  const handleButtonPress = () => {
    console.log(values);
    setValues({ ...initialState });
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={authStyles.container}>
        <StatusBar style="auto" />
        <ImageBackground
          source={imageBg}
          resizeMode="cover"
          style={authStyles.imageBg}
        >
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'}>
            <View
              style={{
                ...s.SignUpFormWrapper,
                paddingBottom: isShowKeyboard ? 16 : 78,
              }}
            >
              <View style={s.imageBox}></View>
              <View style={authStyles.innerForm}>
                <Text style={authStyles.title}>Sign up</Text>
                <TextInput
                  style={authStyles.input}
                  placeholder="Login"
                  placeholderTextColor={colors.textColor}
                  value={values.login}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) => handleInputChange(value, 'login')}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="Email"
                  placeholderTextColor={colors.textColor}
                  value={values.email}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) => handleInputChange(value, 'email')}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor={colors.textColor}
                  value={values.password}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) => handleInputChange(value, 'password')}
                />
                {!isShowKeyboard && (
                  <>
                    <CustomButton
                      text="SIGN UP"
                      onPressFunc={() => handleButtonPress()}
                    />
                    <Text style={authStyles.question}>
                      Already have an account? Sign in
                    </Text>
                  </>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const s = StyleSheet.create({
  SignUpFormWrapper: {
    position: 'relative',
    justifyContent: 'flex-end',
    paddingTop: 92,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: `${colors.white}`,
  },
  imageBox: {
    position: 'absolute',
    height: 120,
    width: 120,
    left: '50%',
    transform: [{ translateX: -50 }],
    top: '-12%',
    zIndex: 2,
    backgroundColor: `${colors.bgcolor}`,
  },
});

export default RegistrationScreen;
