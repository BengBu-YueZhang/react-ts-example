import * as React from 'react';
import { addRouterRecord } from '../store/actions/routerRecord';
import { connect } from 'react-redux';
import RouterMap from '../config/routers';

export interface Props {
  [key: string]: any;
}

class Dashboard extends React.Component<Props, object> {

  public componentDidMount () {
    this.props.dispatch(addRouterRecord(
      this.props.location.pathname,
      RouterMap[this.props.location.pathname].name
    ))
  }

  public render () {
    return (
      <div>
        仪表盘
        <button
          onClick={() => this.props.history.push('/users')}
        >Users</button>
      </div>
    )
  }
}

export default connect()(Dashboard)
