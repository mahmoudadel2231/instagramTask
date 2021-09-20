import React, {useEffect} from 'react';
import {Provider, useSelector} from 'react-redux';
import {LogBox, Text, TextInput} from 'react-native';
// import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {store, persistor} from './redux/store';
import AppContainer from './navigation';
// import {COLORS} from './common';

const App = () => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;
  LogBox.ignoreAllLogs(true);

  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
};

export default App;
