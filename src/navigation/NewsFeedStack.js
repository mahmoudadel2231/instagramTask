import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddPostScreen, NewsFeedScreen} from '../screens';

const Stack = createStackNavigator();

export default function NewsFeedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => null,
      }}>
      <Stack.Screen name="news" component={NewsFeedScreen} />
      <Stack.Screen name="addPost" component={AddPostScreen} />
    </Stack.Navigator>
  );
}
