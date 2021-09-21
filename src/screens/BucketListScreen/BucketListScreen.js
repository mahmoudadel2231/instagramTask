import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, IMAGES} from '../../common';
import {CustomInput, NewsComponent} from '../../components';
import styles from './style';
import * as yup from 'yup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const BucketListScreen = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <>
      <View style={styles.header}>
        <Text>Bucket List</Text>
      </View>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: hp(7),
            backgroundColor: 'red',
          }}>
          <TextInput
            onChangeText={text => setText(text)}
            value={text}
            style={{
              width: wp(70),
              backgroundColor: 'white',
              height: hp(5),
              marginHorizontal: wp(5),
            }}
          />
          <TouchableOpacity
            onPress={() => {
              console.log('ff');
              setText('');
            }}>
            <MaterialCommunityIcons
              name={'keyboard-backspace'}
              size={28.5}
              color="white"
              style={{width: wp(10)}}
            />
          </TouchableOpacity>
        </View>
        {[1, 2, 3, 4, 5].map(() => {
          return <Text>ff</Text>;
        })}
      </View>
    </>
  );
};
