import * as React from 'react';

export interface Props {
  [key: string]: any;
}

class Users extends React.Component<Props, object> {

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

export default Users
