import React, {useState} from 'react';
import {View, Text, Image, Button} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {IMAGES} from '../../common';
import styles from './style';
import {Picker} from '@react-native-picker/picker';

export const AddPostScreen = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <>
      <View style={styles.header}>
        <Text>ADD Post</Text>
      </View>
      <View
        style={{
          width: wp(100),
          height: hp(30),
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: hp(5),
        }}>
        <Image
          source={IMAGES.testImage}
          style={{height: wp(30), width: wp(22)}}
        />
        <Image
          source={IMAGES.testImage}
          // style={{height: wp(15), width: wp(15), marginHorizontal: wp(10)}}
          style={{height: wp(30), width: wp(22), marginHorizontal: wp(10)}}
        />
        <Image
          source={IMAGES.testImage}
          style={{height: wp(30), width: wp(22)}}
        />
      </View>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Button title={'add'}></Button>
    </>
  );
};
