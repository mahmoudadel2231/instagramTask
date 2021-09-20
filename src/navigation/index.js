import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './NavigationService';
import LoginStack from './LoginStack';

const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => null,
        }}>
        <Stack.Screen name="login" component={LoginStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
