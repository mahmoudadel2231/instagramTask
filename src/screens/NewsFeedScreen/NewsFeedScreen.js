import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, IMAGES} from '../../common';
import {NewsComponent} from '../../components';
import styles from './style';
import * as yup from 'yup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {navigate} from '../../navigation/NavigationService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const NewsFeedScreen = ({navigation}) => {
  // const user = AsyncStorage.getItem('user');
  // console.log(JSON.parse(user));
  axios
    .get('http://10.0.2.2:3000/newsFeed')
    .then(res => {
      console.log(res.data);
      // AsyncStorage.setItem('user', JSON.stringify(res.data));
      // navigate('home');
    })
    .catch(err => {
      console.log(err);
      Alert.alert('Something went wrong');
    });
  return (
    <>
      <View style={styles.header}>
        <Ionicons
          name={'add-circle-outline'}
          size={28.5}
          color="transparent"
          style={{width: wp(10)}}
        />
        <Text>NEWS FEED</Text>
        <TouchableOpacity
          onPress={() => {
            navigate('addPost');
          }}>
          <Ionicons
            name={'add-circle-outline'}
            size={28.5}
            color="red"
            style={{width: wp(10)}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          data={[1, 2, 3, 4]}
          contentContainerStyle={{paddingBottom: hp(18)}}
          renderItem={() => {
            return (
              <NewsComponent
                username={'mahmoud adel'}
                date={'4d'}
                likes={'22 Like'}
              />
            );
          }}
        />
      </View>
    </>
  );
};
