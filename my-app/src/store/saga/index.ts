import { all } from 'redux-saga/effects';
import login from './login';
import users from './users';

export default function* rootSaga(): any {
  yield all([
    login(),
    users()
  ])
}
