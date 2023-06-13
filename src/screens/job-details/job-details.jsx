import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Share,
  Alert
} from "react-native";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../../src/components";
import { SIZES, icons } from "../../constants";
import useFetch from "../../../src/hook/useFetch";
import { useGetJobDetailsQuery } from "../../../src/store/apiSlice";
import useTheme from "../../hook/useTheme";
import useThemedStyles from "../../hook/useThemedStyles";
import styles from "./job.details.styles";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = ({ route, navigation }) => {
  // const params = useSearchParams();
  // const router = useRouter();
  const { params } = route;
  const { id } = params;
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: id,
  });
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return (
          <JobAbout info={data[0].job_description ?? "No data provided"} />
        );

      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ScreenHeaderBtn
          iconUrl={icons.share}
          dimension="60%"
          handlePress={()=>{
            if(data[0].job_apply_link){
              onShare(data[0].job_apply_link)
            }
          }}
        />
      ),
    });
  }, [navigation, data]);

  const onShare = async (url) => {
    try {
      const result = await Share.share({
        message: url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error);
       Alert.alert(error.message);
    }
  };

  const theme = useTheme();
  const style = useThemedStyles(styles);
  return (
    <SafeAreaView style={style.safeArea}>
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={theme.ui.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <JobFooter
          url={
            data[0]?.job_google_link ??
            "https://careers.google.com/jobs/results/"
          }
        />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
