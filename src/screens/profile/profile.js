import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { ThemeContext } from "styled-components/native";
import styles from "./profile.style";
import { ProfileTextField, PrimaryButton } from "../../components";
import { useSelector } from "react-redux";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { firebaseDB } from "../../../firebase";
import { useDispatch } from "react-redux";
import { userSlice } from "../../store/userSlice";
import { icons } from "../../constants";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isEditMode, setEditMode] = useState(false);

  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [lastName, setLastName] = useState(currentUser.lastName);
  const [email, setEmail] = useState(currentUser.email);
  const [mobile, setMobile] = useState(currentUser.mobile);

  const performAction = () => {
    if (
      isEditMode &&
      firstName != "" &&
      lastName != "" &&
      mobile != "" &&
      email != ""
    ) {
      updateUser();
      updateStore();
      console.log("==================user updated");
    }
    setEditMode(!isEditMode);
  };

  const updateUser = async () => {
    const userRef = doc(firebaseDB, "Users", currentUser.userId);
    await updateDoc(userRef, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
    });
  };

  const updateStore = async () => {
    const docRef = doc(firebaseDB, "Users", currentUser.userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch(userSlice.actions.setCurrentUser(docSnap.data()));
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
            <Image
              source={{ uri: currentUser.imageUrl }}
              style={styles.profilePicture}
            />
{isEditMode?           <View style={styles.btnContainer}>
            <Image
              source={require("../../../src/assets/icons/camera.png")}
              // resizeMode="cover"
              style={styles.btnImg("60%")}
            />
          </View>: null}

        </View>

        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <ProfileTextField
          fieldValue={firstName}
          fieldName={"First Name"}
          isEditable={isEditMode}
          onChangeText={setFirstName}
        />
        <ProfileTextField
          fieldValue={lastName}
          fieldName={"Last Name"}
          isEditable={isEditMode}
          onChangeText={setLastName}
        />
        <ProfileTextField
          fieldValue={email}
          fieldName={"Email"}
          inputMode="email"
          isEditable={isEditMode}
          onChangeText={setEmail}
        />
        <ProfileTextField
          fieldValue={mobile}
          fieldName={"Mobile"}
          inputMode="tel"
          isEditable={isEditMode}
          onChangeText={setMobile}
        />
      </View>
      <View style={styles.actionButton}>
        <PrimaryButton
          backgroundColor={theme.colors.brand.secondary}
          borderRadius={15}
          fontSize={16}
          text={isEditMode ? "Save Changes" : "Edit Profile"}
          onPress={performAction}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
