import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './redux/store';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';
import ScrollbarStyles from './styles/scrollbar-styles';
import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import './style.css';
import Layout from './components/Layout';


const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <ScrollbarStyles />
        <Layout />
      </MuiThemeProvider>
    </PersistGate>
  </Provider>
);

export default hot(App);
