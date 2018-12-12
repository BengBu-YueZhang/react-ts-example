import * as Immutable from 'immutable'

export interface User {
  username: string;
  age: number;
}

export interface InterfaceStoreState {
  users: Immutable.List<User>
}
