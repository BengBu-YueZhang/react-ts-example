import * as Request from '../../util/request';
import * as LoginActions from '../actions/login';
import { setSessionStorage, removeSessionStorage, isHaveSessionStorage } from '../../util/storage';
import { take, fork, put, call } from 'redux-saga/effects';

function* authorize(): any {
  try {
  } catch (error) {
  } finally {
  }
}

function* logout(): any {
  try {
  } catch (error) {
  } finally {
  }
}

export function* main(): any {
  while (true) {
    if (!isHaveSessionStorage('token')) {
      const { username, password, callback } = yield take(LoginActions.LOGIN_REQUEST);
      yield fork(authorize, username, password, callback);
    }
    yield take([LoginActions.LOGIN_ERROR, LoginActions.LOGOUT]);
    yield call(logout);
  }
}
