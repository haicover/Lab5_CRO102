import React from 'react';
import { Provider } from 'react-redux';
import store from './Lab5/bai1/store';
import TakeCapture from './Lab5/bai1/TakeCapture';
// import store from './Lab5/bai2/store';
// import SelectedImage from './Lab5/bai2/SelectedImage';
const App = () => {
  return (
    <Provider store={store}>
      <TakeCapture />
    </Provider>
  );
};

export default App;
