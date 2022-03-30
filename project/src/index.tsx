import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {App} from './components/app/app';
import {store} from './store/index';
import {ErrorMessage} from './components/server-error-message/server-error-message';
import {fetchFilmsAction, checkAuthAction, fetchPromoFilmAction} from './store/api-action';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
