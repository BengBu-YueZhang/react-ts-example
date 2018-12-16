import * as React from 'react';
import * as Styles from './LayoutView.css';
import { Layout, Spin } from 'antd';
import Breadcrumbs from './Breadcrumbs';
import RouterRecord from './RouterRecord';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import MainMenu from './MainMenu';

const Sider = Layout.Sider
const Content = Layout.Content

export interface Props {
  children: JSX.Element[] | JSX.Element
}

class LayoutView extends React.Component<Props, object> {
  public render () {
    return (
      <React.Fragment>
        <Layout className={Styles.layout}>
          <Sider className={Styles.sider}>
            <div className={Styles.logo}>新世紀エヴァンゲリオン</div>
            <MainMenu/>
          </Sider>
          <Layout className={Styles.contentWrapper}>
            <HeaderNav/>
            <RouterRecord/>
            <Breadcrumbs/>
            <Content className={Styles.content}>
              <Spin spinning={false}>
                {
                  this.props.children
                }
              </Spin>
            </Content>
          </Layout>
        </Layout>
      </React.Fragment>
    )
  }
}

export default withRouter<any>(connect()(LayoutView))
