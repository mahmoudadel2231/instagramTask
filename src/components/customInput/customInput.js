import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';
import {COLORS, CONSTANTS} from '../../common';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

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
  // const isRTL = useSelector(state => state.langState.isRTL);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [visible, setVisible] = useState(false);
  const renderSecure = props => (
    <TouchableOpacity onPress={toggleSecureEntry}>
      <Text>feÎ</Text>
    </TouchableOpacity>
  );
  const renderEmpty = props => (
    <TouchableOpacity onPress={toggleSecureEntry}>
      <Text style={{color: 'transparent'}}>feÎ</Text>
    </TouchableOpacity>
  );
  const empty = props => <Text>fff</Text>;

  const renderToggleButton = () => (
    <TouchableOpacity
      style={{height: 20, width: 20, marginRight: 15}}
      onPress={() => setVisible(true)}>
      {/* <Info /> */}
      <Text>fr</Text>
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
    <View style={{marginTop: heightPercentageToDP(2)}}>
      <Controller
        control={control}
        render={({onChange, value}) => (
          <View
            style={[
              {
                backgroundColor: 'white',
                borderColor: error ? COLORS.red : COLORS.lightGray,
                borderWidth: 0.5,
                borderRadius: 7,
                flexDirection: 'row',
                alignItems: 'center',
              },
            ]}>
            <TextInput
              maxLength={maxLength}
              value={value}
              textAlign={'left'}
              keyboardType={keyboard}
              placeholder={`    ${placeholder}`}
              placeholderTextColor={COLORS.lightGray}
              //  placeholderTextColor={COLORS.lightGreen}
              secureTextEntry={secure && secureTextEntry}
              onChangeText={text => onChange(text)}
              style={[
                {
                  borderColor: 'transparent',
                  fontFamily: CONSTANTS.normal,
                  color: COLORS.black,
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
