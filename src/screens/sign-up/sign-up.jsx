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
import { addDoc, collection, doc, setDoc} from "firebase/firestore";
import { auth, firebaseDB } from "../../../firebase";
import { useNavigation } from "@react-navigation/core";
import styles from "./sign-up.style";
import { SIZES } from "../../constants";
import { ThemeContext } from "styled-components/native";
import { PrimaryButton, TextInputField } from "../../components";

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
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

  const gotoLoginScreen = () => {
    navigation.replace("Login");
  };

  const handleSignUp = async() => {
    if(firstName != "" && lastName != "" && email != "" && mobile != "" && password != ""){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        addUserToDb(user);
        navigation.replace("Home");
        // ...
      })
      .catch((error) => {
        alert(error.message);
      });
    }else{
    alert("please enter all details")  
    }
   
  };

  const addUserToDb = async(user)=>{
    await setDoc(doc(firebaseDB, "Users", user.uid), {
      firstName: firstName, 
      lastName: lastName, 
      email: email,
      mobile: mobile,
      userId: user.uid
    })
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        <TextInputField
          onChangeText={setFirstName}
          placeholder={"First Name"}
          value={firstName}
        />

        <TextInputField
          onChangeText={setLastName}
          placeholder={"Last Name"}
          value={lastName}
        />

        <TextInputField
          inputMode="email"
          onChangeText={setEmail}
          placeholder={"Email"}
          value={email}
        />
        <TextInputField
          inputMode="numeric"
          onChangeText={setMobile}
          placeholder={"Mobile"}
          value={mobile}
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
            text={"SignUp"}
            onPress={handleSignUp}
          />
        </View>

        <View style={styles.signUpView}>
          <Text style={styles.signUpText} onPress={gotoLoginScreen}>
            Already have an account? Login Now
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};



export default SignUpScreen;
