import * as React from 'react';

export interface State {
  token: string;
}

export default class LogIn extends React.Component<object, State> {
  constructor (props: object) {
    super(props)
    this.state = {
      token: ''
    }
  }

  public render () {
    return (
      <div>登录页</div>
    )
  }
}
