import { StyleSheet, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {  auth } from '../../../firebase';



export default function SplashScreen({navigation }) {

useEffect(() => {

  const timer = setTimeout(() => {
    onAuthStateChanged(auth, (user)=>{
        if (user) {
            navigation.replace('Home');
        } else {
            navigation.replace('Login');
        }
      });
  }, 3000);

  return () => clearTimeout(timer);
}, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/kemal.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 200,
    height: 200
  }
});