import React from 'react';
import {View, Image, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, IMAGES} from '../../common';
import styles from './style';

export const ProfileScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.header}>
        <Text>Profile</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={IMAGES.testImage}
          style={{width: wp(40), height: hp(15)}}
        />
        <Text>fefe</Text>
        <Text>fefe</Text>
        <Text>fefe</Text>
        <View
          style={{
            height: 0.5,
            backgroundColor: COLORS.black,
            width: wp(100),
          }}
        />
      </View>
    </>
  );
};
