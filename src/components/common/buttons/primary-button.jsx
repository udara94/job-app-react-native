import React from 'react';
import { TouchableOpacity, Text, Dimensions } from 'react-native';
import styles from "./primary-button.style";
const { width } = Dimensions.get('window');
const buttonDefaultWidth = width * 0.8;

const PrimaryButton = ({ onPress, backgroundColor, fontSize, borderRadius, text, buttonWidth = buttonDefaultWidth }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor, borderRadius, width: buttonWidth }]}
    >
      <Text style={[styles.buttonText, { fontSize }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;