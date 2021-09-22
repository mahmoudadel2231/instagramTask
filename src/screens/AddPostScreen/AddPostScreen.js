import React, {useState} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, IMAGES} from '../../common';
import styles from './style';
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {remove} from '../../redux/actions';
import axios from 'axios';

export const AddPostScreen = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedBucketList, setSelectedBucketList] = useState();
  const BucketList = useSelector(state => state.bucketListState?.list);
  const dispatch = useDispatch();
  console.log('selectedBucketList ', selectedBucketList);
  const onPress = () => {
    axios
      .post(
        'http://10.0.2.2:3000/newsFeed',
        {
          username: 'mahmoud adel',
          date: '7d',
          likes: '20',
          image: selectedImage,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        console.log(selectedBucketList);
        // dispatch(remove(item.id));

        dispatch(remove(selectedBucketList));
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Something went wrong');
      });
  };

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
        <TouchableOpacity
          style={
            selectedImage == IMAGES.testImage && {
              borderWidth: 4,
              borderColor: COLORS.lightGreen,
            }
          }
          onPress={() => {
            setSelectedImage(IMAGES.testImage);
          }}>
          <Image
            source={IMAGES.testImage}
            style={{height: wp(30), width: wp(22)}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selectedImage == IMAGES.testImage1 && {
              borderWidth: 4,
              borderColor: COLORS.lightGreen,
            }
          }
          onPress={() => {
            setSelectedImage(IMAGES.testImage1);
          }}>
          <Image
            source={IMAGES.testImage1}
            // style={{height: wp(15), width: wp(15), marginHorizontal: wp(10)}}
            style={{height: wp(30), width: wp(22), marginHorizontal: wp(10)}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selectedImage == IMAGES.testImage2 && {
              borderWidth: 4,
              borderColor: COLORS.lightGreen,
            }
          }
          onPress={() => {
            setSelectedImage(IMAGES.testImage2);
          }}>
          <Image
            source={IMAGES.testImage2}
            style={{height: wp(30), width: wp(22)}}
          />
        </TouchableOpacity>
      </View>
      <Picker
        selectedValue={selectedBucketList}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedBucketList(itemValue)
        }>
        {BucketList?.map(item => {
          console.log('fefeef', item);
          return <Picker.Item label={item.text} value={item.id} />;
        })}
      </Picker>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </>
  );
};
