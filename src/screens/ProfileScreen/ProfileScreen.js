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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

export const ProfileScreen = ({navigation}) => {
  const [user, setUser] = useState({});
  const [reload, setRelaod] = useState(0);

  const [showReload, setShowReload] = useState(false);
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
      setShowReload(true);

      Alert.alert('Something Went Wrong');
    }
  };

  useEffect(() => {
    getData();
  }, [reload]);

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
      {!showReload && (
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
          <Text style={{marginLeft: wp(5), marginTop: hp(2)}}>
            {user.email}
          </Text>
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
      )}
      {showReload && (
        <TouchableOpacity
          onPress={() => {
            setRelaod(reload + 1);
          }}>
          <Ionicons
            name={'reload-circle-sharp'}
            size={44}
            color={COLORS.lightGreen}
            style={{
              position: 'absolute',
              top: 0,
              alignSelf: 'center',
              marginTop: hp(10),
            }}
          />
        </TouchableOpacity>
      )}
    </>
  );
};
