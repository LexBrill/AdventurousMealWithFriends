import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, AppRegistry,Center,Image } from 'react-native';
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
          options={{
            headerShown: false
            // headerTitle: () => (
            //   <Image
            //     style={styles.only}
            //     source={require('./Logo.png')}
                
            //   />
            // ),
            }}
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

  const styles = StyleSheet.create({
    only: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      resizeMode: "stretch",
    },
  })

