import * as React from 'react';
import { addRouterRecord } from '../store/actions/routerRecord';
import { getUsersRequest } from '../store/actions/users';
import { connect } from 'react-redux';
import RouterMap from '../config/routers';
import StoreState from '../store/types';
import { getUsers } from '../store/selectors/users';
import { Table, Tag } from 'antd';
import * as UsersActions from '../store/actions/users';

interface Columns {
  title: string,
  dataIndex: string,
  render?: (row: UsersActions.User) => JSX.Element | JSX.Element[]
}

interface UsersInterface {
  columns: Columns[]
}

const mapStateToProps = (state: StoreState) => {
  return {
    users: getUsers(state)
  }
}

export interface Props {
  [key: string]: any;
}

class Users extends React.Component<any, object> implements UsersInterface {

  public columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age'
    },
    {
      title: '职位',
      dataIndex: 'job',
      render: (row: UsersActions.User) => {
        return (
          <Tag color="blue">{row.job}</Tag>
        )
      }
    }
  ]

  public componentDidMount () {
    this.props.dispatch(addRouterRecord(
      this.props.location.pathname,
      RouterMap[this.props.location.pathname].name
    ))
    this.props.dispatch(getUsersRequest())
  }

  public render () {
    return (
      <div>
        <Table
          columns={this.columns}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Users)
