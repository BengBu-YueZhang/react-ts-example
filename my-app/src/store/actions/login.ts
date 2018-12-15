export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export type LOGIN_REQUEST = typeof LOGIN_REQUEST;
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;
export type LOGIN_ERROR = typeof LOGIN_ERROR;

export interface LoginRequest {
  type: LOGIN_REQUEST;
}

export interface LoginSuccess {
  type: LOGIN_SUCCESS;
}

export interface LoginError {
  type: LOGIN_ERROR
}

export function loginRequest(): LoginRequest {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess(): LoginSuccess {
  return {
    type: LOGIN_SUCCESS
  }
}

export function loginError(): LoginError {
  return {
    type: LOGIN_ERROR
  }
}
