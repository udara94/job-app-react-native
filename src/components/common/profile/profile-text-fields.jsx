import { Text, TextInput, View, Dimensions } from "react-native";
import styles from "./profile-text-fields.styles";
import useThemedStyles from "../../../hook/useThemedStyles";
const { width } = Dimensions.get("window");
const textInputDefaultWidth = width * 0.8;

const ProfileTextField = ({
  fieldName = "",
  fieldValue,
  inputMode = "text",
  textInputWidth = textInputDefaultWidth,
  isEditable = false,
  onChangeText
}) => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.parent}>
      <View style={style.labelContainer}>
        <Text style={style.fieldName}>{fieldName}</Text>
      </View>
      <View style={[style.inputContainer, { width: textInputWidth }]}>
        <TextInput
          editable={isEditable}
          selectionColor={"red"}
          inputMode={inputMode}
          value={fieldValue}
          style={style.searchInput}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default ProfileTextField;
