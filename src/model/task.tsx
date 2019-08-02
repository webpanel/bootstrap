// import * as React from 'react';

import { Entity } from 'webpanel-admin';
import { SortInfoOrder } from 'webpanel-data';
import { api } from './api';
import { user } from './user';

export const task = new Entity({
  name: 'Task',
  icon: 'unordered-list',
  list: () => ({
    initialSorting: [{ columnKey: 'dueDate', order: SortInfoOrder.ascend }],
    table: { condensed: true, actionButtonsFixed: true }
  }),
  dataSource: api,
  showDetailPage: true,
  searchable: true
})
  .inputField('title')
  .booleanField('completed', { filter: true })
  .dateField('dueDate', { filter: true, sortable: true })
  .relationshipField('assignee', { targetEntity: () => user, type: 'toOne' });
