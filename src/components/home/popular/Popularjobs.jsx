import { useState } from "react";
// import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularjobs.style";
import { SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { useGetPopularJobsQuery, useGetJobDetailsQuery } from "../../../store/apiSlice";
import useThemedStyles from "../../../hook/useThemedStyles";
import useTheme from "../../../hook/useTheme";

const Popularjobs = ({navigation}) => {

  const { data, isLoading, error } = useGetPopularJobsQuery({
    query: "React developer",
    num_pages: "1",
  })


  const [selectedJob, setSelectedJob] = useState();
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const handleCardPress = (item) => {
    navigation.push("job-details" ,{id: item.job_id});
    setSelectedJob(item.job_id);
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={style.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={style.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={theme.ui.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data.data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;