import React from 'react';
import {Text, View, Image} from 'react-native';
import {IMAGES} from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const NewsComponent = ({title}) => {
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
          backgroundColor: 'red',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={IMAGES.logo}
            style={{
              width: wp(5),
              height: wp(5),
              borderRadius: wp(5 / 2),
              marginHorizontal: wp(2),
            }}
          />
          <Text>{title}</Text>
        </View>
        <Text>{title}</Text>
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
          backgroundColor: 'blue',
        }}>
        <Text>{title}</Text>
      </View>
    </View>
  );
};
