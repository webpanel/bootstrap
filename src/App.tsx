import 'moment/locale/cs';

import * as React from 'react';

import { LocaleProvider } from 'antd';
import { WebpanelAdmin } from './Admin';
import en_US from 'antd/lib/locale-provider/en_GB';

export const App = () => {
  return (
    <LocaleProvider locale={en_US}>
      <WebpanelAdmin />
    </LocaleProvider>
  );
};
