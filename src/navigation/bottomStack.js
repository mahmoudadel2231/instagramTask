import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../common';
import {navigate} from './NavigationService';
import {NewsFeedScreen} from '../screens/NewsFeedScreen/NewsFeedScreen';
import {BucketListScreen, ProfileScreen} from '../screens';
import NewsFeedStack from './NewsFeedStack';

const Tab = createBottomTabNavigator();

export const BottomStack = () => {
  const arr = [
    <Tab.Screen
      name="news"
      component={NewsFeedStack}
      options={{
        headerShown: false,
        tabBarLabel: ({color}) => (
          <Text style={{color, marginBottom: 2}}>efef</Text>
        ),
        tabBarIcon: ({color, size}) => <Text>fef</Text>,
      }}
    />,
    <Tab.Screen
      name="ff"
      component={BucketListScreen}
      options={{
        headerShown: false,
        tabBarLabel: ({color}) => (
          <Text style={{color, marginBottom: 2}}>efef</Text>
        ),
        tabBarIcon: ({color, size}) => <Text>fef</Text>,
      }}
    />,
    <Tab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarLabel: ({color}) => (
          <Text style={{color, marginBottom: 2}}>efef</Text>
        ),
        tabBarIcon: ({color, size}) => <Text>fef</Text>,
      }}
    />,
  ];
  return (
    <Tab.Navigator
      tabBar={props => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar
            {...props}
            style={{
              backgroundColor: 'transparent',
              height: hp(7),
            }}
          />
        </View>
      )}
      tabBarOptions={{
        showIcon: true,
        activeTintColor: COLORS.primary,
        inactiveTintColor: 'black',
        keyboardHidesTabBar: true,
        style: styles.navigator,
        tabStyle: {
          backgroundColor: COLORS.white,
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}
      initialRouteName="Home"
      backBehavior="initialRoute">
      {arr.map(item => {
        return item;
      })}
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // SHADOW
  },
  navigator: {
    backgroundColor: 'transparent',
  },
  containers: {
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: COLORS.primary,
  },
  buttonIcon: {
    fontSize: 16,
    color: 'white',
  },
});
