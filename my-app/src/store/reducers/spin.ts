import StoreState from '../types';
import * as SpinActions from '../actions/spin';

function spin(
  state: StoreState['spinStatus'],
  action: SpinActions.LoadingEnd | SpinActions.LoadingStart
): StoreState['spinStatus'] {
  switch (action.type) {
    case SpinActions.LOADING_END:
      return state.set(action.style, false);
    case SpinActions.LOADING_START:
      return state.set(action.style, true);
    default:
      return state
  }
}

export default spin