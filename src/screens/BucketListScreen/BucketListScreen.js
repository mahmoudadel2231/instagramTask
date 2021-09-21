import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../common';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
              console.log('ff');
              setText('');
            }}>
            <AntDesign name={'plussquareo'} size={30} color={COLORS.gray} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={[1, 2, 3, 4]}
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
          renderItem={() => {
            return (
              <TouchableOpacity>
                <Text style={{marginVertical: hp(1), width: wp(90)}}>
                  CAIRO
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
};
