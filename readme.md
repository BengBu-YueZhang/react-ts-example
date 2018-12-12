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