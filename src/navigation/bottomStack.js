import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../common';
import {BucketListScreen, ProfileScreen} from '../screens';
import NewsFeedStack from './NewsFeedStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export const BottomStack = () => {
  const arr = [
    <Tab.Screen
      name="news"
      component={NewsFeedStack}
      options={{
        headerShown: false,
        tabBarLabel: ({color}) => (
          <Text style={{color, marginBottom: 2}}>NewsFeed</Text>
        ),
        tabBarIcon: ({color, size}) => (
          <Ionicons name={'newspaper-outline'} size={18} color={color} />
        ),
      }}
    />,
    <Tab.Screen
      name="ff"
      component={BucketListScreen}
      options={{
        headerShown: false,
        tabBarLabel: ({color}) => (
          <Text style={{color, marginBottom: 2}}>BucketList</Text>
        ),
        tabBarIcon: ({color, size}) => (
          <Entypo name={'bucket'} size={18} color={color} />
        ),
      }}
    />,
    <Tab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarLabel: ({color}) => (
          <Text style={{color, marginBottom: 2}}>Profile</Text>
        ),
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name={'user'} size={18} color={color} />
        ),
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
});
