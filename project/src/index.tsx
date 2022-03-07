import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';
import {filmMock} from './mock/films';
// import {filmPromoMock}  from './mock/film-promo';


// const appPageProps = {
//   filmCardTitle:'The Grand Budapest Hotel',
//   filmCardGenre:'Drama',
//   filmCardYear: 2014,
// };


ReactDOM.render(
  <React.StrictMode>
    <App films={filmMock}/>
  </React.StrictMode>,
  document.getElementById('root'));
