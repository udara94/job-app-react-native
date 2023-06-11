import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, {
  useContext,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useNavigation } from "@react-navigation/core";
import styles from "./profile.style";
import { ProfileTextField, PrimaryButton } from "../../components";
import { useSelector } from "react-redux";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseDB } from "../../../firebase";
import { useDispatch } from "react-redux";
import { userSlice } from "../../store/userSlice";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import * as ImagePicker from "expo-image-picker";
import useTheme from "../../hook/useTheme";
import useThemedStyles from "../../hook/useThemedStyles";

const ProfileScreen = () => {
  const navigation = useNavigation();
  // const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isEditMode, setEditMode] = useState(false);
  const { width, height } = Dimensions.get("window");
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [lastName, setLastName] = useState(currentUser.lastName);
  const [email, setEmail] = useState(currentUser.email);
  const [mobile, setMobile] = useState(currentUser.mobile);
  const [imageUrl, setImageUrl] = useState(currentUser.imageUrl);
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets[0].uri != null) {
      const source = { uri: result.assets[0].uri };
      await uploadProfileImage(source);
    }
  };

  const uploadProfileImage = async (image) => {
    const storage = getStorage();
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const fileName = image.uri.substring(image.uri.lastIndexOf("/") + 1);
    const imageRef = ref(storage, `upload/job_app/${fileName}`);
    await uploadBytes(imageRef, blob);
    await getImageUrl(imageRef);
  };

  const getImageUrl = async (imageRef) => {
    getDownloadURL(imageRef)
      .then(async (url) => {
        setImageUrl(url);
        await updateUser({
          imageUrl: url,
        });
        await updateStore();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const performAction = () => {
    if (
      isEditMode &&
      firstName != "" &&
      lastName != "" &&
      mobile != "" &&
      email != ""
    ) {
      updateUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobile: mobile,
      });
      updateStore();
    }
    setEditMode(!isEditMode);
  };

  const updateUser = async (updatedUser) => {
    const userRef = doc(firebaseDB, "Users", currentUser.userId);
    await updateDoc(userRef, updatedUser);
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
    <BottomSheetModalProvider>
      <View style={style.container}>
        <View style={style.profileContainer}>
          <View style={style.imageContainer}>
            {imageUrl != null && imageUrl != "" ? (
              <Image source={{ uri: imageUrl }} style={style.profilePicture} />
            ) : (
              <Image source={require("../../../src/assets/images/job-logo.png")} style={styles.profilePicture} />
            )}

            {isEditMode ? (
              <TouchableOpacity style={style.btnContainer} onPress={pickImage}>
                <Image
                  source={require("../../../src/assets/icons/camera.png")}
                  style={style.btnImg("60%")}
                />
              </TouchableOpacity>
            ) : null}
          </View>

          <Text style={style.name}>
            {firstName} {lastName}
          </Text>
        </View>
        <View style={style.infoContainer}>
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

        {/* <BottomSheetModal
       ref={bottomSheetModalRef}
       index={1}
       snapPoints={snapPoints}
       onChange={handleSheetChanges}
       enablePanDownToClose={true}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheetModal> */}
        <View style={style.actionButton}>
          <PrimaryButton
            backgroundColor={theme.button.primary}
            borderRadius={15}
            fontSize={16}
            text={isEditMode ? "Save Changes" : "Edit Profile"}
            onPress={performAction}
          />
        </View>
      </View>
    </BottomSheetModalProvider>
  );
};

export default ProfileScreen;
