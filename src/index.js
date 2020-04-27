import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App/App.js'
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

function* rootSaga() {
  yield takeEvery('GET_LIST', getListSaga);



}
function* getListSaga(action) {
  try {
    const response = yield axios.get('/words');
    yield put({ type: 'SET_LIST', payload: response.data })
    console.log('payload is', response.data);

  }
  catch (error) {
    console.log('Error with Search GET', error);
  }

}

const sagaMiddleware = createSagaMiddleware();

const wordList = (state = [], action) => {
  switch (action.type) {
    case 'SET_LIST':
      return action.payload;
    default:
      return state;
  }
}

const storeInstance = createStore(
  combineReducers({
    wordList,
  }),
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
  document.getElementById('root'));
