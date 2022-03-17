import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';
import {filmMock} from './mock/films';
import {commentMock} from './mock/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App films={filmMock} reviews = {commentMock} />
  </React.StrictMode>,
  document.getElementById('root'));
