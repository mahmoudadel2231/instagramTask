import React, {useEffect} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {LogBox, Text, TextInput} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {store, persistor} from './redux/store';
import AppContainer from './navigation';
// import {COLORS} from './common';
import {persistor, store} from './redux/store';
import {Provider} from 'react-redux';

const App = () => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;
  LogBox.ignoreAllLogs(true);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
