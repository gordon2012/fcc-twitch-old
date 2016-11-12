import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState, fetchUserData} from './action_creators';
import App from './components/App';
import './sass/style.sass'

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    logger()
  )
);

store.dispatch(setState({
    list: ['ESL_SC2', 'freecodecamp', 'medrybw', 'storbeck', 'habathcx',  'OgamingSC2', 'cretetion', 'RobotCaleb', 'noobs2ninjas', 'monstercat', 'brunofin', 'comster404']
}));

store.getState().list.forEach((e) => {store.dispatch(fetchUserData(e))});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
