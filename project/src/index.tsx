import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const appPageProps = {
  filmCardTitle:'The Grand Budapest Hotel',
  filmCardGenre:'Drama',
  filmCardYear: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App {...appPageProps}/>
  </React.StrictMode>,
  document.getElementById('root'));
