import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
// import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Text, SafeAreaView } from "react-native";
import axios from "axios";

import { ScreenHeaderBtn, NearbyJobCard } from "../../components";
import { icons, SIZES } from "../../constants";
import styles from "./saved.jobs.style";
import useTheme from "../../hook/useTheme";
import useThemedStyles from "../../hook/useThemedStyles";
import { auth, firebaseDB } from "../../../firebase";
import SaveJobCard from "../../components/common/cards/saved-jobs/saved-job";
const { collection, getDocs } = require("firebase/firestore");

const SavedJobs = () => {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [savedJobs, setSavedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const getSavedJobs = async () => {
    const tempSaveJobs = [];
    const user = auth.currentUser;
    setSavedJobs([]);
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(
        collection(firebaseDB, "Users", user.uid, "SavedJobs")
      );
      querySnapshot.forEach((doc) => {
        tempSaveJobs.push(doc.data());
      });
      setSavedJobs(tempSaveJobs);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = useCallback(()=>{
    setRefreshing(true);
    getSavedJobs();
    setRefreshing(false);
  })

  useEffect(() => {
    getSavedJobs();
  }, []);

  return (
    <SafeAreaView style={style.safeArea}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl 
        refreshing={refreshing}
        onRefresh={onRefresh} />
      }
      >
        <View style={style.container}>
          <View style={style.cardsContainer}>
            {isLoading ? (
              <ActivityIndicator size="large" color={theme.ui.primary} />
            ) : error ? (
              <Text>Something went wrong {error}</Text>
            ) : (
              savedJobs?.map((job) => (
                <SaveJobCard
                  job={job}
                  key={`saved-job-${job.job_id}`}
                  handleNavigate={() =>
                    navigation.push("job-details", { id: job.job_id })
                  }
                />
              ))
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SavedJobs;
