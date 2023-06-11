import React from "react";
// import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { useGetNearByJobsQuery} from "../../../store/apiSlice";
import useThemedStyles from "../../../hook/useThemedStyles";
import useTheme from "../../../hook/useTheme";

const Nearbyjobs = ({navigation}) => {

  const { data, isLoading, error } = useGetNearByJobsQuery({
    query: "React Native developer",
    num_pages: "1",
  })
  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.headerTitle}>Nearby jobs</Text>
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
          data?.data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => navigation.push("job-details",{ id: job.job_id})}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;