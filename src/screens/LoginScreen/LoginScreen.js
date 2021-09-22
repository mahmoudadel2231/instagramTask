import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {yupResolver} from '@hookform/resolvers';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {IMAGES} from '../../common';
import {CustomInput} from '../../components';
import styles from './style';
import * as yup from 'yup';
import {navigate} from '../../navigation/NavigationService';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = ({navigation}) => {
  const {handleSubmit, errors, control} = useForm({
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
      }),
    ),
  });
  const dispatch = useDispatch();
  // const count = useSelector(state => state.counter.value);
  const [userState, setUserState] = useState({});
  // console.log(count);
  //  if (err.response.status === 401) {
  //    setError('username', {
  //      type: 'manual',
  //      message: err.response.data.msg,
  //    });
  //  }

  const onSubmit = data => {
    axios
      .post(
        'http://10.0.2.2:3000/user',
        {
          email: data?.email,
          password: data?.password,
          name: 'mahmoud',
          age: 24,
          image: require('../../assets/images/testUser.png'),
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        AsyncStorage.setItem('user', JSON.stringify(res.data));
        navigate('home');
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Something went wrong');
      });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={IMAGES.logo} style={styles.logo} />
        <CustomInput
          control={control}
          name="email"
          placeholder={'email'}
          error={errors.email}
          style={styles.input}
        />
        <CustomInput
          control={control}
          name="password"
          placeholder={'password'}
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
