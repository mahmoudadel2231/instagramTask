import React from 'react';
import {Text, View, Image} from 'react-native';
import {COLORS, IMAGES} from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const NewsComponent = ({username, date, likes}) => {
  return (
    <View
      style={{
        width: wp(100),
        height: hp(40),
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'red',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: hp(5),
          backgroundColor: 'white',
          paddingHorizontal: wp(2),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={IMAGES.testUser}
            style={{
              width: wp(5),
              height: wp(5),
              borderRadius: wp(5 / 2),
              marginRight: wp(2),
            }}
          />
          <Text>{username}</Text>
        </View>
        <Text>{date}</Text>
      </View>
      <Image
        source={IMAGES.testImage}
        style={{
          height: hp(30),
          width: wp(100),
          resizeMode: 'cover',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: hp(5),
          backgroundColor: 'white',
          borderBottomColor: COLORS.gray,
          borderBottomWidth: 0.5,
          paddingHorizontal: wp(2),
        }}>
        <Text>{likes}</Text>
      </View>
    </View>
  );
};
