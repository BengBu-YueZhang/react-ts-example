import * as React from 'react';
import { addRouterRecord } from '../store/actions/routerRecord';
import { connect } from 'react-redux';
import RouterMap from '../config/routers';

export interface Props {
  [key: string]: any;
}

class Users extends React.Component<Props, object> {

  public componentDidMount () {
    this.props.dispatch(addRouterRecord(
      this.props.location.pathname,
      RouterMap[this.props.location.pathname].name
    ))
  }

  public render () {
    return (
      <div>
        用户列表
        <button
          onClick={() => this.props.history.push('/dashboard')}
        >Dashboard</button>
      </div>
    )
  }
}

export default connect()(Users)
