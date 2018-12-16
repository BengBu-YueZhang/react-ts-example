import * as Immutable from 'immutable';

export default interface StoreState {
  routerRecords: Immutable.Set<Immutable.Map<string, string>>;
  spinStatus: Immutable.Map<string, boolean>;
  userList: Immutable.List<Immutable.Map<string, string | number>>;
}
