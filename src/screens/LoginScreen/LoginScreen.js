import React from 'react';
import {useForm} from 'react-hook-form';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
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
  //  if (err.response.status === 401) {
  //    setError('username', {
  //      type: 'manual',
  //      message: err.response.data.msg,
  //    });
  //  }
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
          style={styles.input}
        />
        <CustomInput
          control={control}
          name="password"
          placeholder={'general.yyyy'}
          error={errors.password}
          secure
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
