import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, sw} from '../../common';

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
    // flex: 1,
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  headerText: {
    fontSize: wp(sw(14)),
  },
  button: {
    marginBottom: hp(10),
    marginTop: hp(5),
    backgroundColor: COLORS.red,
    width: wp(40),
    height: hp(5),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: COLORS.white,
  },
});
