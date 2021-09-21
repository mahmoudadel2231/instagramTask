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

export const NewsFeedScreen = ({navigation}) => {
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
  };
  // console.log(errors);
  return (
    <ScrollView>
      <View style={styles.container}></View>
    </ScrollView>
  );
};
