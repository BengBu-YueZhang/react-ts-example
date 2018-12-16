import { createSelector } from 'reselect';
import StoreState from '../types';

export const getUsers = createSelector(
  [(state: StoreState) => state.userList],
  userList => userList
)
