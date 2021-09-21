import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../common';

export default StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: wp(30),
    height: wp(30),
    marginBottom: hp(5),
    resizeMode: 'contain',
  },
  input: {
    width: wp(75),
    height: hp(7),
    borderColor: COLORS.Black,
    paddingBottom: 10,
    alignItems: 'flex-start',
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
  },
  buttonText: {
    color: COLORS.white,
  },
});
