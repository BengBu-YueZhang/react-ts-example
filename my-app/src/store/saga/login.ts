import * as Request from '../../util/request';
import * as LoginActions from '../actions/login';
import * as SpinActions from '../actions/spin';
import { setSessionStorage, clearSessionStorage, isHaveSessionStorage } from '../../util/storage';
import { take, fork, put, call } from 'redux-saga/effects';

// 登录
function* authorize(username: string, password: string, callback: () => void): any {
  try {
    yield put(SpinActions.loadingStart(SpinActions.SpinType.Global));
    const { token } = yield call(Request.login);
    yield call(setSessionStorage, 'token', token);
    yield call(callback)
  } catch (error) {
    // ...
    // 暂时不做处理, 应当给予消息提示
  } finally {
    yield put(SpinActions.loadingEnd(SpinActions.SpinType.Global));
  }
}

// 登出
function* logout(): any {
  try {
    yield put(SpinActions.loadingStart(SpinActions.SpinType.Global));
    yield call(clearSessionStorage);
    yield call(Request.logout);
  } catch (error) {
    // ...
    // 暂时不做处理, 应当给予消息提示
  } finally {
    yield put(SpinActions.loadingEnd(SpinActions.SpinType.Global));
    
  }
}

export default function* main(): any {
  while (true) {
    // 如果不存在token, 需要重新监听LOGIN_REQUEST的action
    if (!isHaveSessionStorage('token')) {
      const { username, password, callback } = yield take(LoginActions.LOGIN_REQUEST);
      yield fork(authorize, username, password, callback);
      // console.log('username', username)
      // console.log('password', password)
      // console.log('callback', callback)
    }
    yield take([LoginActions.LOGIN_ERROR, LoginActions.LOGOUT]);
    yield call(logout);
  }
}
