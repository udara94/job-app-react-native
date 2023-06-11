import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
// import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Text, SafeAreaView } from "react-native";
import axios from "axios";

import { ScreenHeaderBtn, NearbyJobCard } from "../../components";
import { icons, SIZES } from "../../constants";
import styles from "./search.style";
import useTheme from "../../hook/useTheme";
import useThemedStyles from "../../hook/useThemedStyles";

const JobSearch = ({ route, navigation }) => {
  // const params = useSearchParams();
  // const router = useRouter()
  const { params } = route;
  const { term } = params;
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);
  const apiKey = process.env.RAPID_API_KEY;
  const theme = useTheme()
  const style = useThemedStyles(styles);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: {
          query: term,
          page: page.toString(),
        },
      };
      const response = await axios.request(options);
      setSearchResult(response.data.data);
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePagination = (direction) => {
    if (direction === "left" && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === "right") {
      setPage(page + 1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bg.primary }}>
      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <NearbyJobCard
            job={item}
            handleNavigate={() =>
              navigation.navigate("job-details", { id: item.job_id })
            }
          />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={() => (
          <>
            <View style={style.container}>
              <Text style={style.searchTitle}>{term}</Text>
              <Text style={style.noOfSearchedJobs}>Job Opportunities</Text>
            </View>
            <View style={style.loaderContainer}>
              {searchLoader ? (
                <ActivityIndicator size="large" color={theme.text.primary} />
              ) : (
                searchError && <Text>Oops something went wrong</Text>
              )}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View style={style.footerContainer}>
            <TouchableOpacity
              style={style.paginationButton}
              onPress={() => handlePagination("left")}
            >
              <Image
                source={icons.chevronLeft}
                style={style.paginationImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={style.paginationTextBox}>
              <Text style={style.paginationText}>{page}</Text>
            </View>
            <TouchableOpacity
              style={style.paginationButton}
              onPress={() => handlePagination("right")}
            >
              <Image
                source={icons.chevronRight}
                style={style.paginationImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default JobSearch;
