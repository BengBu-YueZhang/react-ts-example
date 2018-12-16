import * as Immutable from 'immutable';
import routerRecord from './routerRecord';
import spin from './spin';
import users from './users';
import StoreState from '../types';
import * as SpinActions from '../actions/spin';

const init: StoreState = {
  routerRecords: Immutable.Set([]),
  spinStatus: Immutable.Map({
    [SpinActions.SpinType.Global]: false,
    [SpinActions.SpinType.Loyout]: false
  }),
  userList: Immutable.List([])
}

function reducer (state: StoreState = init, action: any): StoreState {
  return {
    routerRecords: routerRecord(state.routerRecords, action),
    spinStatus: spin(state.spinStatus, action),
    userList: users(state.userList, action)
  }
}

export default reducer
