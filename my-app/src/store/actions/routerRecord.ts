export const ADD_ROUTER_RECORD = 'ADD_ROUTER_RECORD'
export const DELETE_ROUTER_RECORD = 'DELETE_ROUTER_RECORD'

export type ADD_ROUTER_RECORD = typeof ADD_ROUTER_RECORD
export type DELETE_ROUTER_RECORD = typeof DELETE_ROUTER_RECORD

export interface AddRouterRecord {
  type: ADD_ROUTER_RECORD;
  path: string;
  title: string;
}

export interface DeleteRouterRecord {
  type: DELETE_ROUTER_RECORD;
  path: string;
  title: string;
  callback: (path: string) => void;
}

export function addRouterRecord (path: string, title: string): AddRouterRecord {
  return {
    type: ADD_ROUTER_RECORD,
    title,
    path,
  }
}

export function deleteRouterRecord(path: string, title: string, callback: (path: string) => void): DeleteRouterRecord {
  return {
    type: DELETE_ROUTER_RECORD,
    title,
    path,
    callback
  }
}
