/**
 * Alt + Shift + Up/Down Arrow copy paste atas bawah dengan cepat
 * 
 *
 * 
 */


import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './komponen/home';
import Login from './komponen/login';
import Register from './komponen/register';
import Profile from './komponen/profile';

const Stack = createNativeStackNavigator();

const YourApp = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={
            {
              // headerShown: false, // if not gonna show header
            }
          }>
          <Stack.Screen name="Honkai Impact 3" component={HomeScreen}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};


export default YourApp;