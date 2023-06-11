import { View, Text } from "react-native";

import styles from "./about.style";
import useThemedStyles from "../../../hook/useThemedStyles";

const About = ({ info }) => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Text style={style.headText}>About the job:</Text>

      <View style={style.contentBox}>
        <Text style={style.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;