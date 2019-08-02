// import * as React from 'react';

import { Entity } from 'webpanel-admin';
import { SortInfoOrder } from 'webpanel-data';
import { api } from './api';

export const user = new Entity({
  name: 'User',
  icon: 'user',
  list: () => ({
    initialSorting: [{ columnKey: 'lastName', order: SortInfoOrder.ascend }],
    table: { condensed: true, actionButtonsFixed: true }
  }),
  dataSource: api,
  showDetailPage: true,
  searchable: true
})
  .inputField('firstName', { filter: true, sortable: true })
  .inputField('lastName', { filter: true, sortable: true });
