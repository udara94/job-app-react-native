import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigation } from "@react-navigation/core";
import styles from "./login.style";
import { PrimaryButton, TextInputField } from "../../components";
import { NavigationContext } from "../../context/navigation.context";
import { NavigationStatus } from "../../enums/navigation-status.enum";
import useTheme from "../../hook/useTheme";
import useThemedStyles from "../../hook/useThemedStyles";
import { getUserDetails } from "../../services/firebase.service";
import { useDispatch } from "react-redux";
import { userSlice } from "../../store/userSlice";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const theme = useContext(ThemeContext);
  const navigation = useNavigation();
  const { onNavigationStausChange } = useContext(NavigationContext);
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docSnap = await getUserDetails(user)
        if(docSnap.exists()){
          dispatch(userSlice.actions.setCurrentUser(docSnap.data()));
        }
        onNavigationStausChange(NavigationStatus.Authenticated);
      }
    });
    return unsubscribe;
  }, []);

  const gotoSignUpScreen = () => {
    navigation.replace("SignUp");
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView style={style.container}>
      <View style={style.container}>
        <View>
          <Image
            source={require("../../../src/assets/images/job-logo.png")}
            style={style.image}
          />
        </View>
        <TextInputField
          onChangeText={setEmail}
          placeholder={"Email"}
          value={email}
        />

        <TextInputField
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder={"Password"}
          value={password}
        />

        <View style={style.buttonView}>
          <PrimaryButton
            backgroundColor={theme.button.primary}
            borderRadius={15}
            fontSize={16}
            text={"Login"}
            onPress={handleLogin}
          />
        </View>

        <View style={style.signUpView}>
          <Text style={style.signUpText} onPress={gotoSignUpScreen}>
            Don't have an account? Sign Up Now
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
