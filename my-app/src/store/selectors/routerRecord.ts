import { createSelector } from 'reselect';
import StoreState from '../types';

export const getRouterRecords = createSelector(
  [(state: StoreState) => state.routerRecords],
  routerRecords => routerRecords
)
