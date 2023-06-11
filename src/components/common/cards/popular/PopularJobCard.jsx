import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";
import useThemedStyles from "../../../../hook/useThemedStyles";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  const style = useThemedStyles(styles);
  return (
    <TouchableOpacity
      style={style.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={style.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={style.logoImage}
        />
      </TouchableOpacity>
      <Text style={style.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={style.infoContainer}>
        <Text style={style.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={style.infoWrapper}>
          <Text style={style.location}> {item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;