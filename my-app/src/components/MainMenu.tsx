import * as React from 'react';
import { Menu, Icon } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import * as Styles from './MainMenu.css';
import './MainMenu.css';
 
class MainMenu extends React.Component<any, object> {
  public render () {
    return (
      <Menu
        className={Styles.root}
        defaultSelectedKeys={[this.props.location.pathname]}
        selectedKeys={[this.props.location.pathname]}
      >
        <Menu.Item key="/dashboard">
          <Link to="/dashboard">
            <Icon type="area-chart" />
            <span>
              仪表盘
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/users">
          <Link to="/users">  
            <Icon type="user" />
            <span>
              用户列表
            </span>
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter<any>(MainMenu);
