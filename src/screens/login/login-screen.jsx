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
import { SIZES } from "../../constants";
import { ThemeContext } from "styled-components/native";
import { PrimaryButton, TextInputField } from "../../components";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const gotoSignUpScreen  = () => {
    navigation.replace("SignUp");
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../../../src/assets/images/job-logo.png")}
            style={styles.image}
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

        <View style={styles.buttonView}>
          <PrimaryButton
            backgroundColor={theme.colors.brand.secondary}
            borderRadius={15}
            fontSize={16}
            text={"Login"}
            onPress={handleLogin}
          />
        </View>

        <View style={styles.signUpView}>
          <Text style={styles.signUpText} onPress={gotoSignUpScreen} >
            Don't have an account? Sign Up Now
          </Text>
        </View>
        
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
