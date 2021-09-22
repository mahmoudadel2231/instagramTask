import React, {useEffect, useState} from 'react';
import {View, Image, Text, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../common';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const ProfileScreen = ({navigation}) => {
  const [user, setUser] = useState({});
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // value previously stored
        setUser(JSON.parse(value));
        // console.log('fe', value);
      }
    } catch (e) {
      // error reading value
      Alert.alert('Something Went Wrong');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // axios
  //   .get(`http://10.0.2.2:3000/user/${user?.id}`)
  //   .then(res => {
  //     console.log('userrr', res.data);
  //     // AsyncStorage.setItem('user', JSON.stringify(res.data));
  //     // navigate('home');
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     Alert.alert('Something went wrong');
  //   });

  return (
    <>
      <View style={styles.header}>
        <Text>Profile</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={user.image}
          style={{
            width: wp(40),
            height: hp(15),
            marginLeft: wp(5),
            marginTop: hp(5),
          }}
        />
        <Text style={{marginLeft: wp(5), marginTop: hp(2)}}>{user.name}</Text>
        <Text style={{marginLeft: wp(5), marginTop: hp(2)}}>{user.email}</Text>
        <Text style={{marginLeft: wp(5), marginTop: hp(2)}}>{user.age}</Text>
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
