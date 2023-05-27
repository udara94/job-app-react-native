import { Text, TextInput, View, Dimensions } from "react-native";
import styles from "./profile-text-fields.styles";
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
  return (
    <View style={styles.parent}>
      <View style={styles.labelContainer}>
        <Text style={styles.fieldName}>{fieldName}</Text>
      </View>
      <View style={[styles.inputContainer, { width: textInputWidth }]}>
        <TextInput
          editable={isEditable}
          selectionColor={"red"}
          inputMode={inputMode}
          value={fieldValue}
          style={styles.searchInput}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default ProfileTextField;
