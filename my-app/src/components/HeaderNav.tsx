import { Layout, Avatar, Menu, Dropdown } from 'antd';
import * as React from 'react';
import * as Styles from './HeaderNav.css';
import { connect } from 'react-redux';
import * as LoginActions from '../store/actions/login';
import { withRouter } from 'react-router-dom';

const Header = Layout.Header;

class HeaderNav extends React.Component<any, object> {

  public logout = (): void => {
    this.props.dispatch(LoginActions.logout());
    this.props.history.push('/login');
  }

  public render () {
    return (
      <Header className={Styles.root}>
        <div/>
        <div>
          <Dropdown overlay={
            <Menu>
              <Menu.Item>
                <a href="javascript:;" onClick={this.logout}>退出</a>
              </Menu.Item>
            </Menu>
          }>
            <Avatar src="https://avatars1.githubusercontent.com/u/24958677?s=460&v=4" size="large"/>
          </Dropdown>
        </div>
      </Header>
    )
  }
}

export default withRouter<any>(connect()(HeaderNav));
