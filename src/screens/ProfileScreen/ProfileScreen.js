import axios from 'axios';
import React from 'react';
import {View, Image, Text, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, IMAGES} from '../../common';
import styles from './style';

export const ProfileScreen = ({navigation}) => {
  const id = 3;
  axios
    .get(`http://10.0.2.2:3000/user/${id}`)
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
        <Text>Profile</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={IMAGES.testImage}
          style={{
            width: wp(40),
            height: hp(15),
            marginLeft: wp(5),
            marginTop: hp(5),
          }}
        />
        <Text style={{marginLeft: wp(5), marginTop: hp(2)}}>fefe</Text>
        <Text style={{marginLeft: wp(5), marginTop: hp(2)}}>fefe</Text>
        <Text style={{marginLeft: wp(5), marginTop: hp(2)}}>fefe</Text>
        <View
          style={{
            height: 0.5,
            backgroundColor: COLORS.black,
            width: wp(100),
            marginTop: hp(2),
          }}
        />
      </View>
    </>
  );
};
