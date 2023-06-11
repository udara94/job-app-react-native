import React from 'react';
import { TouchableOpacity, Text, Dimensions } from 'react-native';
import styles from "./primary-button.style";
import useThemedStyles from '../../../hook/useThemedStyles';
const { width } = Dimensions.get('window');
const buttonDefaultWidth = width * 0.8;

const PrimaryButton = ({ 
  onPress, 
  backgroundColor, 
  fontSize, 
  borderRadius, 
  text, 
  buttonWidth = buttonDefaultWidth }) => {
  
  const style = useThemedStyles(styles)

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style.button, { backgroundColor, borderRadius, width: buttonWidth }]}
    >
      <Text style={[style.buttonText, { fontSize }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;