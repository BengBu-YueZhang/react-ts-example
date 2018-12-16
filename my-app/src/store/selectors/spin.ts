import { createSelector } from 'reselect';
import StoreState from '../types';

export const getSpinStatus = createSelector(
  [(state: StoreState) => state.spinStatus],
  spinStatus => spinStatus
)
