import * as Immutable from 'immutable'
import message from './message'

export interface InterfaceStoreState {
  messages: Immutable.List<Immutable.Map<string, string>>
}

const init: InterfaceStoreState = {
  messages: Immutable.List([])
}

function reducer(state: InterfaceStoreState = init, action: any): InterfaceStoreState {
  return {
    messages: message(state.messages, action)
  }
}

export default reducer
