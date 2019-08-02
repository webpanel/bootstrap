import './env';
import './index.css';
import './i18n';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

const Loader = () => <div>loading...</div>;

ReactDOM.render(
  <React.Suspense fallback={<Loader />}>
    <App />
  </React.Suspense>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
