import * as Immutable from 'immutable';
import routerRecord from './routerRecord';
import StoreState from '../types';

const init: StoreState = {
  routerRecords: Immutable.List([])
}

function reducer (state: StoreState = init, action: any): StoreState {
  return {
    routerRecords: routerRecord(state.routerRecords, action)
  }
}

export default reducer
