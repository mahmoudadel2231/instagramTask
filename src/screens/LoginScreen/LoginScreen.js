import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {View, Image, Text, ScrollView} from 'react-native';
import {yupResolver} from '@hookform/resolvers';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, IMAGES} from '../../common';
import {CustomInput} from '../../components';
import styles from './style';
import * as yup from 'yup';
import {navigate} from '../../navigation/NavigationService';

export const LoginScreen = ({navigation}) => {
  const {handleSubmit, errors, control} = useForm({
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required(),
        password: yup.string().required(),
      }),
    ),
  });

  const onSubmit = data => {
    console.log(data);
    navigate('home');
  };
  // console.log(errors);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={IMAGES.logo} style={styles.logo} />
        <CustomInput
          control={control}
          name="name"
          placeholder={'general.yyyy'}
          error={errors.name}
          style={[
            {
              width: wp(75),
              height: hp(7),
              // borderBottomWidth: 2,
              borderColor: COLORS.Black,
              paddingBottom: 10,
              alignItems: 'flex-start',
            },
          ]}
        />
        <CustomInput
          control={control}
          name="password"
          placeholder={'general.yyyy'}
          error={errors.password}
          secure
          style={[
            {
              width: wp(75),
              height: hp(7),
              // borderBottomWidth: 2,
              borderColor: COLORS.Black,
              paddingBottom: 10,
              alignItems: 'flex-start',
            },
          ]}
        />
        <Text onPress={handleSubmit(onSubmit)}>fefelf,le</Text>
      </View>
    </ScrollView>
  );
};
