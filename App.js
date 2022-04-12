import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import store from './store';

import MainNavigator from './navigation';
import AlertContainer from './screens/AlertContainer';

import { init } from './db';

init()
    .then(() => { console.log('DB initialized') })
    .catch(err => { console.log('DB init failed', err.message) });

export default function App() {
  const [loaded] = useFonts({
    "SourceSerifBold": require('./assets/fonts/SourceSerifPro-SemiBoldItalic.ttf'),
    "SourceSerifRegular": require('./assets/fonts/SourceSerifPro-Regular.ttf'),
  })

  if (!loaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <MainNavigator />
        <AlertContainer />
      </PaperProvider>
    </Provider>
  );
}


