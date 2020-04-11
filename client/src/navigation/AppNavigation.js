import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from "../screens/MainScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Online Shop' }}/>
        <Stack.Screen name="Account" component={AccountScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default AppNavigation;