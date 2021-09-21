import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';
import {COLORS, CONSTANTS} from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Header = ({title}) => {
  return (
    <View
      style={{
        width: wp(100),
        height: hp(10),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{title}</Text>
    </View>
  );
};
