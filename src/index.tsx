import React from 'react';
import ReactDOM from 'react-dom/client';
import browserHistory from './browser-history';
import App from './components/app/app';
import HistoryRouter from './components/history-route/history-route';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory}>
      <ScrollToTop />
      <App />
    </HistoryRouter>
  </React.StrictMode>,
);
