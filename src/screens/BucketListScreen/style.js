import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {sw} from '../../common';

export default StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(100),
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  header: {
    width: wp(100),
    height: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  headerText: {
    fontSize: wp(sw(14)),
  },
});
