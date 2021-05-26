import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo/index';
import { Provider } from 'react-redux';
import reducer from './store/reducers/index';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['error']
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

const app = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Todo />
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));