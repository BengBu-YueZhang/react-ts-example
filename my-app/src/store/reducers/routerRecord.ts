import * as Immutable from 'immutable';
import StoreState from '../types';
import * as RouterRecordActions from '../actions/routerRecord';

function routerRecord (
  state: StoreState['routerRecords'],
  action: RouterRecordActions.AddRouterRecord | RouterRecordActions.DeleteRouterRecord
): StoreState['routerRecords'] {
  switch (action.type) {
    case RouterRecordActions.ADD_ROUTER_RECORD:
      return state.add(Immutable.Map({
        path: action.path,
        title: action.title
      }))
    case RouterRecordActions.DELETE_ROUTER_RECORD:
      return state.delete(Immutable.Map({
        path: action.path,
        title: action.title
      }))
    default:
      return state
  }
}

export default routerRecord