import * as Immutable from 'immutable'
import message from './message'

export interface InterfaceStoreState {
  messages: Immutable.List<Immutable.Map<string, string>>
}

function reducer(state: InterfaceStoreState, action: any): InterfaceStoreState {
  return {
    messages: message(state.messages, action)
  }
}

export default reducer
