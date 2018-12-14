import * as Immutable from 'immutable';

export default interface StoreState {
  routerRecords: Immutable.List<Immutable.Map<string, string>>;
}
