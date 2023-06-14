import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./saved.jobs.style";
import { checkImageURL } from "../../../../utils";
import useThemedStyles from "../../../../hook/useThemedStyles";

const SaveJobCard = ({ job, handleNavigate}) =>{
    const style = useThemedStyles(styles);
    return (
      <TouchableOpacity style={style.container} onPress={handleNavigate}>
        <TouchableOpacity style={style.logoContainer}>
          <Image
            source={{
              uri: checkImageURL(job.employer_logo)
                ? job.employer_logo
                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
            }}
            resizeMode='contain'
            style={style.logImage}
          />
        </TouchableOpacity>
  
        <View style={style.textContainer}>
          <Text style={style.jobName} numberOfLines={1}>
            {job?.job_title}
          </Text>
  
          <Text style={style.jobType}>{job?.job_employment_type}</Text>
        </View>
      </TouchableOpacity>
    );
}

export default SaveJobCard;