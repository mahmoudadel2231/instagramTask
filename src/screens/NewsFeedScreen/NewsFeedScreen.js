import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, IMAGES} from '../../common';
import {NewsComponent} from '../../components';
import styles from './style';
import * as yup from 'yup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {navigate} from '../../navigation/NavigationService';

export const NewsFeedScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.header}>
        <Ionicons
          name={'add-circle-outline'}
          size={28.5}
          color="transparent"
          style={{width: wp(10)}}
        />
        <Text>NEWS FEED</Text>
        <TouchableOpacity
          onPress={() => {
            navigate('addPost');
          }}>
          <Ionicons
            name={'add-circle-outline'}
            size={28.5}
            color="red"
            style={{width: wp(10)}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          data={[1, 2, 3, 4]}
          contentContainerStyle={{paddingBottom: hp(18)}}
          renderItem={() => {
            return (
              <NewsComponent
                username={'mahmoud adel'}
                date={'4d'}
                likes={'22 Like'}
              />
            );
          }}
        />
      </View>
    </>
  );
};
