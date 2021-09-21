import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, IMAGES} from '../../common';
import {NewsComponent} from '../../components';
import styles from './style';
import * as yup from 'yup';

export const NewsFeedScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.header}>
        <Text>NEWS FEED</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={() => {
            return <NewsComponent title={'fgrg'} />;
          }}
        />
      </View>
    </>
  );
};
