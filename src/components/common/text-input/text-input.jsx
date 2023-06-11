import React from "react";
import { TextInput, View, Dimensions } from "react-native";
import styles from "./text-input.style";
import useThemedStyles from "../../../hook/useThemedStyles";
import useTheme from "../../../hook/useTheme";
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
  const theme = useTheme();
  const style = useThemedStyles(styles);
  return (
    <View style={[style.searchContainer, { width: textInputWidth }]}>
      <View style={style.searchWrapper}>
        <TextInput
        inputMode={inputMode}
        selectionColor={"red"}
          style={style.searchInput}
          placeholder={placeholder}
          placeholderTextColor={theme.text.primary}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default TextInputField;
