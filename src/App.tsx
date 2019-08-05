import 'moment/locale/cs';

import * as React from 'react';

import { Admin, Layout } from 'webpanel-admin';

import { ENV } from './env';
import { LocaleProvider } from 'antd';
import { Redirect } from 'react-router';
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
        structureItems={[
          <Layout.StructureItem
            key="/"
            name="redirect-to-first-entity"
            content={<Redirect to={entities[0].getListLink()} />}
          />,
          ...entities.map(x => x.structureItem())
        ]}
      />
    </LocaleProvider>
  );
};
