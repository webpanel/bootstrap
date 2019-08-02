import 'moment/locale/cs';

import * as React from 'react';

import { Admin } from 'webpanel-admin';
import { ENV } from './env';
import { LocaleProvider } from 'antd';
import en_US from 'antd/lib/locale-provider/en_GB';
import { entities } from './model';

export const App = () => {
  return (
    <LocaleProvider locale={en_US}>
      <Admin
        auth={{
          type: 'oauth',
          oauthTokenURL: ENV.REACT_APP_TOKEN_URL,
          clientId: ENV.REACT_APP_CLIENT_ID,
          clientSecret: ENV.REACT_APP_CLIENT_SECRET,
          scope: ENV.REACT_APP_SCOPE
        }}
        entities={entities}
      />
    </LocaleProvider>
  );
};
