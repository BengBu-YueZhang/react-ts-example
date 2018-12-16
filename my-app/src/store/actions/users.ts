export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

export type GET_USERS_REQUEST = typeof GET_USERS_REQUEST;
export type GET_USERS_SUCCESS = typeof GET_USERS_SUCCESS;
export type GET_USERS_ERROR = typeof GET_USERS_ERROR;

export interface User {
  username: string;
  age: number;
  job: string;
  id: string
}

export interface GetUsersRequest {
  type: GET_USERS_REQUEST
}

export interface GetUsersSuccess {
  type: GET_USERS_SUCCESS;
  list: User[];
}

export interface GetUsersError {
  type: GET_USERS_ERROR
}

export function getUsersRequest(): GetUsersRequest{
  return {
    type: GET_USERS_REQUEST
  }
}

export function getUsersSuccess(list: User[]): GetUsersSuccess {
  return {
    type: GET_USERS_SUCCESS,
    list
  }
}

export function getUsersError(): GetUsersError {
  return {
    type: GET_USERS_ERROR
  }
}
