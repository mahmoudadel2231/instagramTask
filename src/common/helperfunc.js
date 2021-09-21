import {Linking, Alert, Platform} from 'react-native';

export const exampleFun = parm1 => {
  return parm1;
};

export const sw = x => {
  return (x / 375) * 100;
};

export const sh = x => {
  return (x / 812) * 100;
};

export const callNumber = phone => {
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert('Your phone not supported to access phone calls');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(err => console.log(err));
};
