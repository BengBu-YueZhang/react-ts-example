export const LOADING_START = 'LOADING_START'
export const LOADING_END = 'LOADING_END'

export type LOADING_START = typeof LOADING_START
export type LOADING_END = typeof LOADING_END

export enum SpinType {
  Global = 'Global',
  Loyout = 'Loyout'
}

export interface LoadingStart {
  type: LOADING_START;
  style: SpinType;
}

export interface LoadingEnd {
  type: LOADING_END;
}

export function loadingStart(style: SpinType): LoadingStart {
  return {
    type: LOADING_START,
    style
  }
}

export function loadingEnd(): LoadingEnd {
  return {
    type: LOADING_END
  }
}
