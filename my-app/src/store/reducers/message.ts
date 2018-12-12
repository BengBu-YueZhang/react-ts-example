import * as Immutable from 'immutable'
import * as Actions from '../actions/index'

function users (
  state: Immutable.List<Immutable.Map<string, string>>,
  action: Actions.InterfaceAddTodo | Actions.InterfaceDeleteTodo
): Immutable.List<Immutable.Map<string, string>>{
  switch (action.type) {
    case Actions.ADD_TODO:
      return state.push(Immutable.Map({
        message: action.message
      }))
    case Actions.DELETE_TODO:
      return state.delete(action.index)
    default:
      return state
  }
}

export default users