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
import { doc, setDoc} from "firebase/firestore";
import { auth, firebaseDB } from "../../../firebase";
import { useNavigation } from "@react-navigation/core";
import styles from "./sign-up.style";
import { PrimaryButton, TextInputField } from "../../components";
import { NavigationContext } from "../../context/navigation.context";
import { NavigationStatus } from "../../enums/navigation-status.enum";
import useTheme from "../../hook/useTheme";
import useThemedStyles from "../../hook/useThemedStyles";


const SignUpScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
 // const theme = useContext(ThemeContext);
  const navigation = useNavigation();
  const { onNavigationStausChange } = useContext(NavigationContext);
  const theme = useTheme();
  const style = useThemedStyles(styles);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        onNavigationStausChange(NavigationStatus.Authenticated);
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
       // navigation.replace("Home");
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
    <KeyboardAvoidingView style={style.container}>
      <View style={style.container}>
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

        <View style={style.buttonView}>
          <PrimaryButton
            backgroundColor={theme.button.primary}
            borderRadius={15}
            fontSize={16}
            text={"SignUp"}
            onPress={handleSignUp}
          />
        </View>

        <View style={style.signUpView}>
          <Text style={style.signUpText} onPress={gotoLoginScreen}>
            Already have an account? Login Now
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};



export default SignUpScreen;
