import * as Immutable from 'immutable';
import routerRecord from './routerRecord';
import spin from './spin';
import StoreState from '../types';
import * as SpinActions from '../actions/spin';

const init: StoreState = {
  routerRecords: Immutable.Set([]),
  spinStatus: Immutable.Map({
    [SpinActions.SpinType.Global]: false,
    [SpinActions.SpinType.Loyout]: false
  })
}

function reducer (state: StoreState = init, action: any): StoreState {
  return {
    routerRecords: routerRecord(state.routerRecords, action),
    spinStatus: spin(state.spinStatus, action)
  }
}

export default reducer
