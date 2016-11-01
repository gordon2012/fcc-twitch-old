import React from 'react';
import ReactDOM from 'react-dom';

import Twitch from './components/Twitch';

const list = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas', 'medrybw'];



ReactDOM.render(
  <Twitch list={list} />,
  document.getElementById('root')
);
