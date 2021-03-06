import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../common';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {add, remove} from '../../redux/actions';

export const BucketListScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const BucketList = useSelector(state => state.bucketListState?.list);

  const dispatch = useDispatch();
  const onPress = () => {
    // dispatch(incrementByAmount(1));
    dispatch(
      add({
        text,
        id: Math.random(),
      }),
    );
  };
  const onItemPress = item => {
    // dispatch(incrementByAmount(1));
    dispatch(remove(item.id));
  };

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
            marginTop: hp(2),
            // backgroundColor: 'red',
          }}>
          <TextInput
            onChangeText={text => setText(text)}
            value={text}
            style={{
              width: wp(70),
              backgroundColor: COLORS.gray,
              height: hp(5),
              marginHorizontal: wp(5),
            }}
          />
          <TouchableOpacity
            onPress={() => {
              onPress();
              setText('');
            }}>
            <AntDesign name={'plussquareo'} size={30} color={COLORS.gray} />
          </TouchableOpacity>
        </View>

        {BucketList.length !== 0 && (
          <FlatList
            data={BucketList}
            ItemSeparatorComponent={() => {
              return (
                <View
                  style={{
                    width: wp(90),
                    alignSelf: 'center',
                    height: 0.5,
                    backgroundColor: COLORS.gray,
                  }}
                />
              );
            }}
            contentContainerStyle={{
              paddingHorizontal: wp(2),
              marginTop: hp(3),
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={() => onItemPress(item)}>
                  <Text style={{marginVertical: hp(1), width: wp(90)}}>
                    {item.text}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </View>
    </>
  );
};
