import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";
import useThemedStyles from "../../../hook/useThemedStyles";

const Footer = ({ url, onSaveJobPressed, isFavorite}) => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.likeBtn} onPress={onSaveJobPressed}>
        {isFavorite ? <Image
          source={icons.heart}
          resizeMode='contain'
          style={style.likeBtnImage}
        />:<Image
        source={icons.heartOutline}
        resizeMode='contain'
        style={style.likeBtnImage}
      />}
      </TouchableOpacity>

      <TouchableOpacity
        style={style.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={style.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;