## 使用

```shell

git clone https://github.com/BengBu-YueZhang/react-ts-demo.git

yarn install

yarn start
```

## 安装

```shell

create-react-app my-app --scripts-version=react-scripts-ts
```

## 无状态组件与TS

```js

import * as React from 'react';

interface IProps {
  name: string;
  sex?: string;
}

function HelloReactTs({ name, sex = '女' }: IProps) {
  return (
    <div>
      <h1>Hi, 我是{ name }, 一名{ sex }生</h1>
    </div>
  )
}

export default HelloReactTs
```

## 输入断言

getElementById 返回的类型为HTMLElement

```ts

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
```

## 有状态组件与TS

```js

import * as React from 'react';

export interface InterfaceProps {
  initNumber: number;
}

interface InterfaceState {
  diffNumber: number;
  initNumber: number;
  lastProps: InterfaceProps
}

class Counter extends React.Component<InterfaceProps, InterfaceState> {

  public static defaultProps = {
    initNumber: 0
  }
  
  public static getDerivedStateFromProps (nextProps: InterfaceProps, prevState: InterfaceState): object | null {
    if (prevState.lastProps.initNumber !== nextProps.initNumber) {
      return {
        initNumber: nextProps.initNumber
      }
    }
    return null
  }

  constructor (props: InterfaceProps) {
    super(props)
    this.state = {
      diffNumber: 1,
      initNumber: 0,
      lastProps: {
        initNumber: this.props.initNumber
      }
    }
  }

  public handleAdd = ():void => {
    this.setState((prevState: InterfaceState) => {
      return {
        initNumber: prevState.initNumber + prevState.diffNumber
      }
    });
  };

  public handleSubtraction = ():void => {
    this.setState((prevState: InterfaceState) => {
      return {
        initNumber: prevState.initNumber - prevState.diffNumber
      }
    });
  };

  public render () {
    return (
      <div>
        <button onClick={this.handleAdd}>+</button>
        <p>{this.state.initNumber}</p>
        <button onClick={this.handleSubtraction}>-</button>
      </div>
    )
  }
}

export default Counter
```

## 添加状态管理

### 定义状态树

> 使用了Immutable不可变的数据类型

```ts

import * as Immutable from 'immutable'

export interface User {
  username: string;
  age: number;
}

export interface InterfaceStoreState {
  users: Immutable.List<User>
}

```

### 添加actions

```ts

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
```

### 添加reducer


```js

// index.ts
import * as Immutable from 'immutable'
import message from './message'

export interface InterfaceStoreState {
  messages: Immutable.List<Immutable.Map<string, string>>
}

function reducer(state: InterfaceStoreState, action: any): InterfaceStoreState {
  return {
    messages: message(state.messages, action)
  }
}

export default reducer


// message.ts
import * as Immutable from 'immutable'
import * as Actions from '../actions/index'

function users (
  state: Immutable.List<Immutable.Map<string, string>>,
  action: Actions.InterfaceAddTodo | Actions.InterfaceDeleteTodo
): Immutable.List<Immutable.Map<string, string>>{
  switch (action.type) {
    case Actions.ADD_TODO:
      return state.push(Immutable.Map({
        message: action.message
      }))
    case Actions.DELETE_TODO:
      return state.delete(action.index)
    default:
      return state
  }
}

export default users
```

### 添加容器

```ts

import * as React from 'react'
import { connect } from 'react-redux'
import { InterfaceStoreState } from '../store/reducers'
import * as Immutable from 'immutable'

const mapStateToProps = ({ messages }: InterfaceStoreState) => {
  return {
    messages
  }
}

export interface InterfaceProps {
  messages: Immutable.List<Immutable.Map<string, string>>;
}

class Message extends React.Component<InterfaceProps, object> {
  render () {
    return <div>{this.props.messages.size}</div>
  }
}

export default connect(mapStateToProps)(Message)
```
