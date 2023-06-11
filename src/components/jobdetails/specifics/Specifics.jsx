import { View, Text } from "react-native";

import styles from "./specifics.style";
import useThemedStyles from "../../../hook/useThemedStyles";

const Specifics = ({ title, points }) => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}:</Text>

      <View style={style.pointsContainer}>
        {points.map((item, index) => (
          <View style={style.pointWrapper} key={item + index}>
            <View style={style.pointDot} />
            <Text style={style.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;