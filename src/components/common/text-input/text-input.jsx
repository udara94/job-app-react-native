import React from "react";
import { TextInput, View, Dimensions } from "react-native";
import styles from "./text-input.style";
const { width } = Dimensions.get("window");
const textInputDefaultWidth = width * 0.8;

const TextInputField = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  textInputWidth = textInputDefaultWidth,
  inputMode = "text"
}) => {
  return (
    <View style={[styles.searchContainer, { width: textInputWidth }]}>
      <View style={styles.searchWrapper}>
        <TextInput
        inputMode={inputMode}
        selectionColor={"red"}
          style={styles.searchInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default TextInputField;
