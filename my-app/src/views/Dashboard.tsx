import * as React from 'react';

export interface Props {
  [key: string]: any;
}

class Dashboard extends React.Component<Props, object> {

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

export default Dashboard
