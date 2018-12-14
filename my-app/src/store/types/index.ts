import * as Immutable from 'immutable';

export default interface StoreState {
  routerRecords: Immutable.Set<Immutable.Map<string, string>>;
}
