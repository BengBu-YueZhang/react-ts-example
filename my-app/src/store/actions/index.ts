export const ADD_TODO = 'ADD_TODO';
// 字符串文字类型
export type ADD_TODO = typeof ADD_TODO;

export const DELETE_TODO = 'DELETE_TODO';
export type DELETE_TODO = typeof DELETE_TODO;

export interface InterfaceAddTodo {
  type: ADD_TODO;
  message: string;
}

export interface InterfaceDeleteTodo {
  type: DELETE_TODO,
  index: number
}

export function addTodo(message: string): InterfaceAddTodo {
  return {
    type: ADD_TODO,
    message
  }
}

export function deleteTodo(index: number): InterfaceDeleteTodo {
  return {
    type: DELETE_TODO,
    index
  }
}