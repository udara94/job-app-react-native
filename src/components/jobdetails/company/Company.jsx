import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";
import useThemedStyles from "../../../hook/useThemedStyles";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <View style={style.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          style={style.logoImage}
        />
      </View>

      <View style={style.jobTitleBox}>
        <Text style={style.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={style.companyInfoBox}>
        <Text style={style.companyName}>{companyName} / </Text>
        <View style={style.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={style.locationImage}
          />
          <Text style={style.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;