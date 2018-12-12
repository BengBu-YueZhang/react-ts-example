import * as React from 'react';
import * as Style from './LogIn.less'
import * as ReactTransitionGroup from 'react-transition-group'

const CSSTransition = ReactTransitionGroup.CSSTransition

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
      <div className={Style.root}>
        <CSSTransition
          in={false}
          timeout={1000}
          classNames={'form'}
          unmountOnExit={false}
        >
          <div/>
        </CSSTransition>
      </div>
    )
  }
}
