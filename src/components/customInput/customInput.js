import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';
import {COLORS, CONSTANTS} from '../../common';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const CustomInput = ({
  control,
  name,
  error,
  placeholder,
  secure,
  info,
  style,
  keyboard,
  multiline,
  disabled,
  maxLength,
  infoText,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const renderSecure = props => (
    <TouchableOpacity onPress={toggleSecureEntry}>
      <MaterialCommunityIcons
        name={secureTextEntry ? 'eye-off' : 'eye'}
        size={22}
        color="white"
        // style={{width: 10}}
      />
    </TouchableOpacity>
  );
  const renderEmpty = props => (
    <TouchableOpacity onPress={toggleSecureEntry}>
      <MaterialCommunityIcons
        name={'keyboard-backspace'}
        size={22}
        color="transparent"
        // style={{width: 10}}
      />
    </TouchableOpacity>
  );

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const right = () => {
    if (keyboard == 'number-pad') return 'left';
    return 'right';
  };

  return (
    <View
      style={{
        marginTop: heightPercentageToDP(2),
        backgroundColor: COLORS.lightGray,
      }}>
      <Controller
        control={control}
        render={({onChange, value}) => (
          <View
            style={{
              borderColor: error ? COLORS.red : COLORS.lightGray,
              borderWidth: 0.5,
              borderRadius: 7,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              maxLength={maxLength}
              value={value}
              textAlign={'left'}
              keyboardType={keyboard}
              placeholder={`${placeholder}`}
              placeholderTextColor={COLORS.white}
              //  placeholderTextColor={COLORS.lightGreen}
              secureTextEntry={secure && secureTextEntry}
              onChangeText={text => onChange(text)}
              style={[
                {
                  borderColor: 'transparent',
                  fontFamily: CONSTANTS.normal,
                  color: COLORS.white,
                },
                style,
              ]}
              autoCapitalize="none"
              multiline={multiline}
              // accessoryRight={() => secure && renderIcon()}
              editable={disabled}
            />
            {secure ? renderSecure() : renderEmpty()}
          </View>
        )}
        name={name}
        defaultValue=""
      />
      {error && (
        <Text
          numberOfLines={1}
          style={{
            color: COLORS.red,
            alignSelf: 'flex-start',
            width: widthPercentageToDP(80),
            fontFamily: CONSTANTS.normal,
          }}>
          {error?.message || error}
        </Text>
      )}
    </View>
  );
};
