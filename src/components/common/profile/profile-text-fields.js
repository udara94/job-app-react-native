import { Text, View } from "react-native";

const ProfileTextField = ({fieldName = "", fieldValue}) => {
  return <View>
    <Text>{fieldName}</Text>
    <Text>{fieldValue}</Text>
  </View>;
};

export default ProfileTextField;
