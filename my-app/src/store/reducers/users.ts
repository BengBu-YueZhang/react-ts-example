import StoreState from '../types';
import * as UsersActions from '../actions/users';
import * as Immutable from 'immutable';

function users(
  state: StoreState['userList'],
  action: UsersActions.GetUsersRequest | UsersActions.GetUsersError | UsersActions.GetUsersSuccess
): StoreState['userList'] {
  switch (action.type) {
    case UsersActions.GET_USERS_ERROR:
      return Immutable.List([])
    case UsersActions.GET_USERS_SUCCESS:
      const newList = action.list.map(l => Immutable.Map({...l}))
      return Immutable.List(newList);
    default:
      return state
  }
}

export default users;
