import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, AppRegistry,Center } from 'react-native';
import GetInputs from './GetInputs.js';
import GetResult from './GetResult.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';



const Stack = createStackNavigator()

export default () => (
  
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="Random Restaurant"
          component={GetInputs}
        />
        <Stack.Screen
          name="Results"
          options={{
            header:() => null
          }}
          component={GetResult}
        />
      </Stack.Navigator>
      </NavigationContainer>
  );



