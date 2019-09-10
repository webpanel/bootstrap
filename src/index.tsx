import './env';
import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { i18nInitialize } from 'webpanel-i18n';

import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

i18nInitialize();

const Loader = () => <div>loading...</div>;

ReactDOM.render(
  <React.Suspense fallback={<Loader />}>
    <App />
  </React.Suspense>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
