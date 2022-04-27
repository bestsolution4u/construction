import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import allReducers from './redux/reducers';
import creatSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/rootSaga';
import { Root, View } from 'native-base';
import Navigation from './navigations';

const sagaMiddleware = creatSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <Navigation />
      </Root>
    </Provider>
  );
};
export default App;
