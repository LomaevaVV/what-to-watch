import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import browserHistory from './browser-history';
import App from './components/app/app';
import HistoryRouter from './components/history-route/history-route';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';
import { store } from './store';
import { fetchFilmsAction } from './store/api-actions';

store.dispatch(fetchFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
