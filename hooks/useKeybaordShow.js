import { Keyboard } from 'react-native';
import { useEffect, useState } from 'react';

const useKeyboardShow = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardWillShow", () => {
      setIsShowKeyboard(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardWillHide", () => {
      setIsShowKeyboard(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return [isShowKeyboard, setIsShowKeyboard];
}

export default useKeyboardShow;