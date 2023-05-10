import { initializeApp } from "firebase/app"
import { initializeAuth } from "firebase/auth"
import { getReactNativePersistence } from "firebase/auth/react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
  apiKey: "AIzaSyA8cx90OVtxgbBVi3eouZG8FZj9XCAWiAk",
  authDomain: "hungry-jack-ff5b4.firebaseapp.com",
  projectId: "hungry-jack-ff5b4",
  storageBucket: "hungry-jack-ff5b4.appspot.com",
  messagingSenderId: "210540438958",
  appId: "1:210540438958:web:6d69f9717f8b41c7d3d43f",
  measurementId: "G-4KZ2MKP8R1",
};


const defaultApp = initializeApp(firebaseConfig);
export const auth = initializeAuth(defaultApp, {
  persistence: getReactNativePersistence(AsyncStorage)
});