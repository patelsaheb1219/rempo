import React from 'react';
import AuthNavigator from './src/navigations/AuthNavigator';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

//File Imports
import store from './src/redux/store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#673AB7',
    accent: '#000'
  }
}

export default App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <AuthNavigator />
      </PaperProvider>
    </StoreProvider>
  );
}
