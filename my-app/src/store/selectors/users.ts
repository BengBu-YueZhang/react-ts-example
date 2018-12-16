import * as Request from '../../util/request';
import * as SpinActions from '../actions/spin';
import * as UsersActions from '../actions/users';
import { take, put, call } from 'redux-saga/effects';

function* getUsers(): any {
  try {
    yield put(SpinActions.loadingStart(SpinActions.SpinType.Loyout));
    const { data } = yield call(Request.getUsers);
    yield put(UsersActions.getUsersSuccess(data));
  } catch (error) {
    yield put(UsersActions.getUsersError());
  } finally {
    yield put(SpinActions.loadingEnd(SpinActions.SpinType.Loyout));
  }
}

export default function* main(): any {
  while (true) {
    yield take(UsersActions.GET_USERS_REQUEST)
    yield call(getUsers)
  }
}
