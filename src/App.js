import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import RootNavigator from './navigation/RootNavigator';
import configureStore from './redux/configureStore';

enableScreens();

const {store, persistor} = configureStore();

export default function App() {
  return (
    <Provider {...{store}}>
      <PersistGate {...{persistor}}>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
