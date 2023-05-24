import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/core";
import { ThemeContext } from "styled-components/native";
import styles from "./profile.style";
import { images } from "../../constants";
import { ProfileTextField, PrimaryButton } from "../../components";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: currentUser.imageUrl }}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>
          {currentUser.firstName} {currentUser.lastName}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <ProfileTextField 
        fieldValue={"First Name"} 
        fieldName={currentUser.firstName} 
        />
        <ProfileTextField 
        fieldValue={""} 
        fieldName={currentUser.lastName} 
        />
        <ProfileTextField 
        fieldValue={""} 
        fieldName={currentUser.email} 
        />
        <ProfileTextField 
        fieldValue={""} 
        fieldName={currentUser.mobile} 
        />
      </View>
      <View style={styles.actionButton}>
        <PrimaryButton
          backgroundColor={theme.colors.brand.secondary}
          borderRadius={15}
          fontSize={16}
          text={"Edit Profile"}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
