import { View, Text } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
    
import drawer from  './src/drawer';
import leavebalance from  './src/leavebalance';
import profile1 from './src/profile1';

    
    const Stack = createNativeStackNavigator();
    
    export default function App() {
      return (
        <NavigationContainer>
          <Stack.Navigator  screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="drawer" component={drawer} />
            <Stack.Screen name="profile1" component={profile1} />
            <Stack.Screen name="leavebalance" component={leavebalance} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    
    