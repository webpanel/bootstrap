import {
  DataSource,
  ResponseDataTransformer
} from 'webpanel-data';

import { AuthSession } from 'webpanel-auth';
import { GraphQLORMConnector as Connector } from 'graphql-orm-connetor';
import { ENV } from '../env';

const connector = new Connector({
  responseDataTransformer: new ResponseDataTransformer()
});

export const api = new DataSource('api', connector, ENV.REACT_APP_API_URL);

export const isNovacloudUser = (): boolean => {
  const payload = AuthSession.current().getTokenPayload();
  return (
    (payload &&
      payload.user &&
      payload.user.email &&
      payload.user.email.indexOf('@novacloud.cz') !== -1) ||
    false
  );
};
