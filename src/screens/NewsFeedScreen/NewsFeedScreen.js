import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useFocusEffect} from '@react-navigation/native';
import {NewsComponent} from '../../components';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {navigate} from '../../navigation/NavigationService';
import axios from 'axios';
import {COLORS} from '../../common';

export const NewsFeedScreen = ({navigation}) => {
  // const user = AsyncStorage.getItem('user');
  // console.log(JSON.parse(user));
  const [posts, setPosts] = useState([]);
  const [reload, setRelaod] = useState(0);
  const [showReload, setShowReload] = useState(false);
  console.log(showReload);
  useFocusEffect(
    React.useCallback(() => {
      axios
        .get('http://10.0.2.2:3000/newsFeed')
        .then(res => {
          // console.log('NWWS FEED', JSON.stringify(res.data));
          // AsyncStorage.setItem('newsFeed', JSON.stringify(res.data));
          setPosts(res.data);
          setShowReload(false);

          // navigate('home');
        })
        .catch(err => {
          console.log(err);
          Alert.alert('Something went wrong');
          setShowReload(true);
        });
    }, [reload]),
  );

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
        {!showReload && (
          <FlatList
            data={posts}
            contentContainerStyle={{paddingBottom: hp(18)}}
            renderItem={({item}) => {
              return (
                <NewsComponent
                  username={item.username}
                  date={item.date}
                  likes={`${item.likes} Likes`}
                  image={item.image}
                />
              );
            }}
          />
        )}
        {!showReload && (
          <TouchableOpacity
            onPress={() => {
              setRelaod(reload + 1);
            }}>
            <Ionicons
              name={'reload-circle-sharp'}
              size={44}
              color={COLORS.lightGreen}
              style={{
                position: 'absolute',
                top: 0,
                alignSelf: 'center',
                marginTop: hp(10),
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};
