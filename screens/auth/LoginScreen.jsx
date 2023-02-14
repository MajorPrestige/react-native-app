import { useState, useRef } from 'react';
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
  TouchableOpacity,
} from 'react-native';

import CustomButton from '../../components/CustomButton';

import { imageBg } from './auth.styles';
import { colors } from '../../helpers/variables';

import useFonts from '.././../hooks/useFonts';
import useKeyboardShow from '../../hooks/useKeybaordShow';

import authStyles from './auth.styles';

const initialState = {
  email: '',
  password: '',
};

const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useKeyboardShow();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [values, setValues] = useState(initialState);
  const { isReady, onLayoutRootView } = useFonts();

  const emailEl = useRef(null);
  const passwordEl = useRef(null);

  const handleInputChange = (value, key) => {
    setValues((initialState) => ({ ...initialState, [key]: value }));
  };

  const handleButtonPress = () => {
    console.log(values);
    setValues({ ...initialState });
    setIsShowKeyboard(false);
    setIsShowPassword(false);
    Keyboard.dismiss();
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onInputBtnPress = () => {
    setIsShowPassword(!isShowPassword);
  };

  if (!isReady) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={authStyles.container} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <ImageBackground
          source={imageBg}
          resizeMode="cover"
          style={authStyles.imageBg}
        >
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'}>
            <View
              style={{
                ...s.SignInFormWrapper,
                paddingBottom: isShowKeyboard ? 16 : 144,
              }}
            >
              <View style={authStyles.innerForm}>
                <Text style={authStyles.title}>Sign in</Text>
                  <TextInput
                    style={authStyles.input}
                    placeholder="Email"
                    placeholderTextColor={colors.textColor}
                    ref={emailEl}
                    value={values.email}
                    onFocus={() => setIsShowKeyboard(true)}
                    onChangeText={(value) => handleInputChange(value, 'email')}
                    blurOnSubmit={false}
                    onSubmitEditing={() => passwordEl.current.focus()}
                  />
                <View>
                <TextInput
                  style={authStyles.input}
                  placeholder="Password"
                  secureTextEntry={!isShowPassword}
                  placeholderTextColor={colors.textColor}
                  ref={passwordEl}
                  value={values.password}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) => handleInputChange(value, 'password')}
                  onSubmitEditing={() => handleButtonPress()}
                />
                <TouchableOpacity style={authStyles.inputBtn} activeOpacity={0.8} onPress={onInputBtnPress}>
                    <Text style={authStyles.inputText}>{isShowPassword? "Hide": "Show" }</Text>
                  </TouchableOpacity>
                </View>
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
  SignInFormWrapper: {
    position: 'relative',
    justifyContent: 'flex-end',
    paddingTop: 32,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: `${colors.white}`,
  },
});

export default LoginScreen;
